const sgMail = require('@sendgrid/mail');

const dotenv = require('dotenv')

dotenv.config()

const { SENDER_EMAIL, SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: SENDER_EMAIL };
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;