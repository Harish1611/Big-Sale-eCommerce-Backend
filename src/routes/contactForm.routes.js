const express = require('express');
const emailController = require('../controller/contactForm.controller');

const router = express.Router();

router.post('/send-email', emailController.sendEmail);

module.exports = router;
