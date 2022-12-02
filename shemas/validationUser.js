const Joi = require('joi')

const registerUser = Joi.object({
    name: Joi.string().trim().required().messages({
         "string.base": `name should be a type of string`,
        "string.empty": `name must contain value`,
        "any.required": `name is a required field`
    }),
    email: Joi.string().trim().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).required().messages({
        "string.base": `email should be a type of 'text'`,
        "string.empty": `email must contain value`,
        "string.pattern.base": `email must be a valid email`,
        "any.required": `email is a required field`
    }),
    password: Joi.string().trim().min(7).required().messages({
        "string.base": `password should be a type of 'text'`,
        "string.empty": `password must contain value`,
        // "string.pattern.base": `password must contain at 7 symbols`,
        "any.required": `password is a required field`
    }),
})

const loginUser = Joi.object({
    email: Joi.string().trim().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).required().messages({
        "string.base": `email should be a type of 'text'`,
        "string.empty": `email must contain value`,
        "string.pattern.base": `email must be a valid email`,
        "any.required": `email is a required field`
    }),
    password: Joi.string().min(7).required().messages({
        "string.base": `password should be a type of 'text'`,
        "string.empty": `password must contain value`,
        "string.pattern.base": `password must contain at 7 symbols`,
        "any.required": `password is a required field`
    }),
})

module.exports = {
    registerUser,
    loginUser
}