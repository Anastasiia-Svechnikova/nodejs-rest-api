const Contact = require('../../models/contact')


const getAll = async (req, res,) => {
    // console.log(req.user)
    const result = await Contact.find();
    res.status(200).json(result)
}

module.exports = getAll
