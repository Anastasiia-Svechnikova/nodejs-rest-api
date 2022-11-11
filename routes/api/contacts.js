const express = require('express')
const {requestError, postContactValidationSchema, updateContactValidationSchema} = require('../../helpers')
// const Joi = require('joi')
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts')

const router = express.Router()
// const validationSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// })

router.get('/', async (req, res, next) => {
  try {
    const result= await listContacts()
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await getContactById(id)
    if (!result) {
      console.dir(requestError)
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
    const result =  await addContact(newContact)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    next(error)
  }


})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await removeContact(id)
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
    console.log(error.message)
    if (error) {
      throw requestError(400, error.message)
    }
    if (!newContact) {
      throw requestError(400)
    }
    const result = await updateContact(id, newContact)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = router
