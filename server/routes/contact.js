const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, lastname, email, message } = req.body;

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, lastname, email, message });
    await newMessage.save();

    // Send email using Gmail via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📩 New message from ${name} ${lastname}`,
      text: `
You received a new message:

Name: ${name} ${lastname}
Email: ${email}

Message:
${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Message saved and email sent successfully.' });
  } catch (error) {
    console.error("❌ Contact route error:", error);
    res.status(500).json({ success: false, message: 'Something went wrong.', error: error.message });
  }
});

module.exports = router;
