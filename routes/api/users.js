const express = require('express')

const { controllerWrapper } = require('../../helpers')
const { validateBody, authorize, upload } = require('../../middlewares')
const { userValidation } = require('../../shemas')
const {usersCtrl} = require('../../controllers')


const userRouter = express.Router()

userRouter.post('/signup', validateBody(userValidation.registerUser), controllerWrapper(usersCtrl.register))

userRouter.get('/verify/:verificationToken', controllerWrapper(usersCtrl.verifyUser))

userRouter.post('/login', validateBody(userValidation.loginUser), controllerWrapper(usersCtrl.login))

userRouter.get('/logout', authorize, controllerWrapper(usersCtrl.logout))

userRouter.get('/current', authorize, controllerWrapper(usersCtrl.getCurrent))

userRouter.patch('/',authorize, validateBody(userValidation.updateSubscription), controllerWrapper(usersCtrl.updateSubscription))

userRouter.patch('/avatars', authorize, upload.single('avatar'), controllerWrapper(usersCtrl.updateAvatar))


module.exports = userRouter