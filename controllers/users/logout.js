const { requestError } = require('../../helpers');
const User = require('../../models/user')

const logout = async (req, res) => {
    const { id } = req.user;
    
    const user = await User.findById(id);
    if (!user) {
        throw requestError(404)
    }
    await User.findByIdAndUpdate(id, { token: '' })
    res.status(204, "No connect").json({message: "Logout success"})

}

module.exports = logout