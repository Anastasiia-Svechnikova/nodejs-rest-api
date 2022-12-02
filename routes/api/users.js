const express = require('express')

const { controllerWrapper } = require('../../helpers')
const { validateBody } = require('../../middlewares')
const { userValidation } = require('../../shemas')
const {usersCtrl} = require('../../controllers')


const userRouter = express.Router()

userRouter.post('/register', validateBody(userValidation.registerUser), controllerWrapper(usersCtrl.register) )

module.exports = userRouter