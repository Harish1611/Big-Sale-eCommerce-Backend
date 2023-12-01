const emailService = require('../services/contactForm.service');

const emailController = {
  sendEmail: async (req, res) => {
    const { firstName,
        lastName,
        email,
        phone,
        to,
        subject,
        message  } = req.body;

    try {
      const response = await emailService.sendEmail({ firstName,
        lastName,
        email,
        phone,
        to,
        subject,
        message  });
      res.status(200).send(`Email sent: ${response}`);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  },
};

module.exports = emailController;
