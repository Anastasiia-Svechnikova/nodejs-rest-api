const { BASE_URL } = process.env;


const createVerificationEmail = (email, code) => {
    const verificationEmail = {
        to: email,
        subject: "Verify your email, please", 
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${code}">Click to verify your email</a>`
    }

    return verificationEmail;
}

module.exports = createVerificationEmail