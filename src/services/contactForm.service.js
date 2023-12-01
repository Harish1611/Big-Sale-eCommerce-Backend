const nodemailer = require('nodemailer');

const emailService = {
  sendEmail: async ({  firstName,
  lastName,
  email,
  phone,
  to,
  subject,
  message }) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'harishnaidub005@gmail.com',
        pass: 'oplu ybah jpht moar',
      },
    });
    const body = `<div> Contact from submisson from Big Sale <br> <p>Client: ${firstName} ${lastName} <br> Email: ${email}<br>Phone No: ${phone} <br> Message: ${message} <div/>`
    const mailOptions = {
      from: 'harishnaidub005@gmail.com',
      to,
      subject,
      html:body,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      });
    });
  },
};

module.exports = emailService;
