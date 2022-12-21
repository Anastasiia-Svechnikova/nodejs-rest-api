const { requestError } = require('../../helpers')
const Contact = require('../../models/contact')

const deleteContact = async (req, res) => {
    const userId = req.user._id
    const id = req.params.contactId
    const result = await Contact.findOneAndDelete({id, owner: userId})
    if (!result) {
        throw requestError(404)
    }
    res.status(200).json(result)
}

module.exports = deleteContact