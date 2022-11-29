const express = require('express')
const {requestError, postContactValidationSchema, updateContactValidationSchema, updateFavoriteValidationSchema} = require('../../helpers')
const Contact = require('../../models/contact')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const result= await Contact.find()
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await Contact.findById(id)
    if (!result) {
      throw requestError(404)
    }
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newContact = req.body
    const { error } = postContactValidationSchema.validate(newContact)

    if (error) {
      throw requestError(400, error.message)
    }
    newContact.favorite = newContact.favorite ?? false
    const result =  await Contact.create(newContact)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    next(error)
  }


})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await await Contact.findByIdAndRemove(id)
    if (!result) {
      throw requestError(404)
    }
        res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const newContact = req.body
    const { error } = updateContactValidationSchema.validate(newContact)
    if (error) {
      throw requestError(400, error.message)
    }
    if (!newContact) {
      throw requestError(400)
    }
    const result = await Contact.findByIdAndUpdate(id, newContact, {new:true})
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})
router.patch('/:contactId/favorite', async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const isFavorite = req.body;
    const { error } = updateFavoriteValidationSchema.validate(isFavorite)
    if (error) {
      throw requestError(400, error.message)
    }
      if (!isFavorite) {
      throw requestError(400)
      }
        const result = await Contact.findByIdAndUpdate(id, isFavorite, {new:true})
    res.status(200).json(result)
    
  } catch (error) {
    next(error)
  }
})

module.exports = router
