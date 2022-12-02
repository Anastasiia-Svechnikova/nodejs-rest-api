const {requestError} = require('../helpers')

const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { err } = schema.validate(req.body)
        if (err) {
            next(requestError(400, err.message))
        }
        next()
    }
    return func
    
}

module.exports = validateBody