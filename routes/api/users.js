const express = require('express')

const { controllerWrapper } = require('../../helpers')
const { validateBody } = require('../../middlewares')
const { userValidation } = require('../../shemas')
const {usersCtrl} = require('../../controllers')


const userRouter = express.Router()

userRouter.post('/signup', validateBody(userValidation.registerUser), controllerWrapper(usersCtrl.register) )

module.exports = userRouter