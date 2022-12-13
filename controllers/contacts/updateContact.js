const { requestError } = require('../../helpers');
const Contact = require('../../models/contact')

const updateContact = async (req, res) => {
    const newContact = req.body;
    const id = req.params.contactId;
        const userId = req.user._id

    if (!newContact) {
        throw requestError(400)
    }
    const result = await Contact.findOneAndUpdate({id, owner: userId}, newContact, { new: true })
    if (!result) {
        throw requestError(404)
    }
    res.status(200).json(result)

}

module.exports = updateContact