const { requestError } = require('../../helpers')
const Contact = require('../../models/contact')

const deleteContact = async (req, res, next) => {
    const id = req.params.contactId
    const result = await Contact.findByIdAndRemove(id)
    if (!result) {
        throw requestError(404)
    }
    res.status(200).json(result)
}

module.exports = deleteContact