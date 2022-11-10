const Joi = require('joi')

// const postContactValidationSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// })

// const updateContactValidationSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string(),
//   phone: Joi.string(),
// }).min(1)

 const postContactValidationSchema = Joi.object({
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
    phone: Joi.string().trim().regex(/^[6-9]\d{9}$/).required().messages({
        "string.base": `phone should be a type of string`,
        "string.empty": `phone must contain value`,
        "string.pattern.base": `phone must be 10 digit number`,
        "any.required": `phone is a required field`
    }),
}).required();


 const updateContactValidationSchema = Joi.object({
    name: Joi.string().trim().messages({
       "string.base": `name should be a type of string`,
        "string.empty": `name must contain value`,
        "any.required": `name is a required field`
    }),
    email: Joi.string().trim().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).messages({
        "string.base": `email should be a type of 'text'`,
        "string.empty": `email must contain value`,
        "string.pattern.base": `email must be a valid email`,
        "any.required": `email is a required field`
    }),
    phone: Joi.string().trim().regex(/^[6-9]\d{9}$/).messages({
       "string.base": `phone should be a type of string`,
        "string.empty": `phone must contain value`,
        "string.pattern.base": `phone must be 10 digit number`,
        "any.required": `phone is a required field`
    }),
}).min(1);



module.exports = {
    postContactValidationSchema,
    updateContactValidationSchema
}