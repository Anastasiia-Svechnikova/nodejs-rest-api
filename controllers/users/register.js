const { requestError } = require('../../helpers')
const bcrypt = require("bcrypt")
const User = require('../../models/user')


const register = async (req, res, next) => {
    const { name, email, password } = req.body
    const cloneUser = await User.findOne({email})
    if (cloneUser) {
        throw requestError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await User.create({ name, email,password: hashPassword })
    res.status(201).json({name, email})
}

module.exports = register