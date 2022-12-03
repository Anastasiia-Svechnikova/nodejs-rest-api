const express = require('express')

const {controllerWrapper } = require('../../helpers')
const {contactValidation} = require('../../shemas')
const { contactsCtrl } = require('../../controllers')
const {validateBody,validateId, authorize } = require('../../middlewares')

const router = express.Router()

router.get('/', authorize, controllerWrapper(contactsCtrl.getAll))

router.get('/:contactId', authorize, validateId, controllerWrapper(contactsCtrl.getById))

router.post('/', authorize, validateBody(contactValidation.postContact), controllerWrapper(contactsCtrl.postContact))

router.delete('/:contactId', authorize, validateId, controllerWrapper(contactsCtrl.deleteContact))

router.put('/:contactId', authorize, validateId, validateBody(contactValidation.updateContact), controllerWrapper(contactsCtrl.updateContact))

router.patch('/:contactId/favorite', authorize, validateId, validateBody(contactValidation.updateFavorite), controllerWrapper(contactsCtrl.updateFavorite))

module.exports = router
