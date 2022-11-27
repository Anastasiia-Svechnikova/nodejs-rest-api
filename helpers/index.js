const {requestError} = require('./requestError')
const {postContactValidationSchema, updateContactValidationSchema, updateFavoriteValidationSchema} = require('./validationContacts')

module.exports = {
    requestError,
    postContactValidationSchema,
    updateContactValidationSchema,
    updateFavoriteValidationSchema,
}