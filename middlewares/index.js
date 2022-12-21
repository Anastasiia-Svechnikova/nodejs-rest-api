const validateBody = require('./validateBody')
const validateId = require('./validateId')
const authorize = require('./authorize')
const upload = require('./fileUpload')


module.exports = {
    validateBody, validateId, authorize, upload
}