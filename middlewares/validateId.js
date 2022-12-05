const { isValidObjectId } = require("mongoose");
const { requestError } = require("../helpers");

const validateId = (req, res, next) => {
    const id = req.params.contactId;
    if (!isValidObjectId(id)) {
        next(requestError(400, "Invalid Id"))
    }
    next()
}
 module.exports = validateId