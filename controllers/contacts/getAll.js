const Contact = require('../../models/contact')


const getAll = async (req, res,) => {
    const owner = req.user.id
    const result = await Contact.find({owner}).populate("owner", "email");
    res.status(200).json(result)
}

module.exports = getAll
