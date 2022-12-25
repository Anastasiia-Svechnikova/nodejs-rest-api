const { requestError, createVerificationEmail, sendEmail } = require('../../helpers')
const {uid} = require('uid')
const bcrypt = require("bcrypt")
const User = require('../../models/user')
const gravatar = require('gravatar')


const register = async (req, res) => {
    const { email, password } = req.body
    const cloneUser = await User.findOne({email})
    if (cloneUser) {
        throw requestError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const avatarUrl = gravatar.url('email')
    const verificationToken = uid();
    const newUser = {email, password: hashPassword, subscription: "starter", avatarUrl, verificationToken}
    
    await User.create(newUser);

    const verificationEmail = createVerificationEmail(email, verificationToken);
    await sendEmail(verificationEmail)

    res.status(201).json({user: email, subscription: "starter", avatarUrl})
}

module.exports = register