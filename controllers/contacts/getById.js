const Contact = require('../../models/contact')
const {requestError} = require('../../helpers')

const getById = async (req, res) => {
    const id = req.params.contactId;
    const result = await Contact.findById(id)
    if (!result) {
             throw requestError(404)
    }
    res.status(200).json(result)
}

module.exports = getById