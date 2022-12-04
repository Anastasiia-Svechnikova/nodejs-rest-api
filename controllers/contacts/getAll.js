const Contact = require('../../models/contact')


const getAll = async (req, res,) => {
    const owner = req.user.id
    const { page = 1, limit = 10, ...query } = req.query
    const skip = (page- 1) * limit
    const result = await Contact.find({owner, ...query }).skip(skip).limit(limit).populate("owner", "email");
    res.status(200).json(result)
}

module.exports = getAll
