const { requestError } = require("../../helpers");
const Contact = require("../../models/contact");


const updateFavorite = async (req, res) => {
    const id = req.params.contactId;
    const isFavorite = req.body;
    const result = await Contact.findByIdAndUpdate(id, isFavorite, { new: true })
    if (!result) {
        throw requestError(404)
    }
    res.status(200).json(result)
}

module.exports = updateFavorite