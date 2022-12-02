const { requestError } = require('../../helpers')
const bcrypt = require("bcrypt")
const User = require('../../models/user')


const register = async (req, res, next) => {
    const { email, password } = req.body
    const cloneUser = await User.findOne({email})
    if (cloneUser) {
        throw requestError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = {email, password: hashPassword, subscription: "starter"}
    await User.create(newUser)
    res.status(201).json({user: email, subscription: "starter"})
}

module.exports = register