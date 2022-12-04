const User = require('../../models/user')

const updateSubscription = async (req, res) => {
    const subscription = req.body
    const id = req.user.id
    const result = await User.findByIdAndUpdate(id, subscription, {new: true})
    res.status(200).json(result)
}

module.exports = updateSubscription