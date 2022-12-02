const Contact = require('../../models/contact')


const postContact = async(req, res) => {
    const newContact = req.body;
    newContact.favorite = newContact.favorite ?? false
    const result = await Contact.create(newContact)
    res.status(201).json(result)
}

module.exports = postContact