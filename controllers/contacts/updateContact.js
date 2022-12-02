const { requestError } = require('../../helpers');
const Contact = require('../../models/contact')

const updateContact = async (req, res) => {
    const newContact = req.body;
    const id = req.params.contactId
    if (!newContact) {
        throw requestError(400)
    }
    const result = await Contact.findByIdAndUpdate(id, newContact, { new: true })
    if (!result) {
        throw requestError(404)
    }
    res.status(200).json(result)

}

module.exports = updateContact