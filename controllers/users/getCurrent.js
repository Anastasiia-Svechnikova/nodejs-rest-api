
const getCurrent = async(req, res) => {
    const { email, subscription, avatarUrl } = req.user;
    res.status(200).json({email, subscription, avatarUrl})
}

module.exports =getCurrent