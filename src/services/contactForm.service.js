const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

ADMIN_MAIL = process.env.ADMIN_MAIL;
ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const emailService = {
  sendEmail: async ({
    firstName,
    lastName,
    email,
    phone,
    to,
    subject,
    message,
  }) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ADMIN_MAIL,
        pass: ADMIN_PASSWORD,
      },
    });
    console.log(ADMIN_MAIL, ADMIN_PASSWORD);

    const companyName = "Big Sale - eCom";
    const htmlBody = `
      <div>
        Contact form submission from Big Sale <br>
        <p>Client: ${firstName} ${lastName} <br>
        Email: ${email} <br>
        Phone No: ${phone} <br>
        Message: ${message}</p>
      </div>
    `;

    const mailOptions = {
      from: `"${companyName}" <${ADMIN_MAIL}>`,
      to,
      subject,
      html: htmlBody,
    };

    try {
      // Send email to admin
      const adminResponse = await sendMail(transporter, mailOptions);

      // If admin submission is successful, send confirmation email to the client
      if (adminResponse) {
        const clientConfirmationBody = `
          <div>
            Greetings from Big Sale!<br>
            Thank you for your submission to Big Sale! <br>
            We have received your message and will get back to you shortly.
          </div>
        `;

        const clientConfirmationOptions = {
          from: `"${companyName}" <${ADMIN_MAIL}>`,
          to: email,
          subject: "Greetings from Big Sale!",
          html: clientConfirmationBody,
        };

        await sendMail(transporter, clientConfirmationOptions);
      }

      return adminResponse;
    } catch (error) {
      throw error;
    }
  },
};

const sendMail = (transporter, options) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

module.exports = emailService;
