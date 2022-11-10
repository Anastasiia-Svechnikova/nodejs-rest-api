const {requestError} = require('./requestError')
const {postContactValidationSchema, updateContactValidationSchema} = require('./validationContacts')

module.exports = {
    requestError,
    postContactValidationSchema,
    updateContactValidationSchema
}