const express = require('express')
const {controllerWrapper } = require('../../helpers')
const {contactValidation} = require('../../shemas')
const router = express.Router()
const { contactsCtrl } = require('../../controllers')
const {validateBody,validateId } = require('../../middlewares')


router.get('/', controllerWrapper(contactsCtrl.getAll))

router.get('/:contactId', validateId, controllerWrapper(contactsCtrl.getById))

router.post('/', validateBody(contactValidation.postContact), controllerWrapper(contactsCtrl.postContact))

router.delete('/:contactId', validateId, controllerWrapper(contactsCtrl.deleteContact))

router.put('/:contactId', validateId, validateBody(contactValidation.updateContact), controllerWrapper(contactsCtrl.updateContact))

router.patch('/:contactId/favorite', validateId, validateBody(contactValidation.updateFavorite), controllerWrapper(contactsCtrl.updateFavorite))

module.exports = router
