const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { requestError } = require('../../helpers')
const User = require('../../models/user')

const {SECRET_KEY} = process.env

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {

        throw requestError(401, "Email or password is wrong")
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
        throw requestError(401, "Email or password is wrong")
    }
    const {_id: id, subscription }= user
    const payload = { id }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "20h" })
    await User.findByIdAndUpdate(id, { token })
    const result = {
        token, 
        user: {
            email, 
            subscription
        }
    }
    res.status(200).json(result)

}

module.exports =login