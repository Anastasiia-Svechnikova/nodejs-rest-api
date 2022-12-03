const jwt = require("jsonwebtoken")
const { requestError, controllerWrapper } = require("../helpers");
const User = require("../models/user");

const {SECRET_KEY} = process.env

const authorize = async (req, res, next) => {

    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');
    if(bearer !== "Bearer") {
        throw requestError(401)

    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findById(id)
        if (!id || !user) {
            throw requestError(401)
        }
        req.user = user;

        next()
    } catch (error) {
        throw requestError(401)
    }


}

module.exports = controllerWrapper(authorize)