const User = require('../../models/user');
const { requestError, createVerificationEmail, sendEmail } = require('../../helpers')

const resendEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw requestError(400, "missing required field email")
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw requestError(404);
    }
    if (user.verify) {
        throw requestError(400, 'Verification has already been passed')
    }
    const verificationEmail = createVerificationEmail(email, user.verificationToken)
    await sendEmail(verificationEmail);

    res.status(200).json({
        message: "Verification email sent"
    })

}

module.exports = resendEmail;