const express = require('express')

const { controllerWrapper } = require('../../helpers')
const { validateBody, authorize } = require('../../middlewares')
const { userValidation } = require('../../shemas')
const {usersCtrl} = require('../../controllers')


const userRouter = express.Router()

userRouter.post('/signup', validateBody(userValidation.registerUser), controllerWrapper(usersCtrl.register))

userRouter.post('/login', validateBody(userValidation.loginUser), controllerWrapper(usersCtrl.login))

userRouter.get('/logout', controllerWrapper())

userRouter.get('/current',authorize, controllerWrapper(usersCtrl.getCurrent))


module.exports = userRouter