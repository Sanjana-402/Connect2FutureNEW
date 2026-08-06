const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
    console.log("Contact API called");
  try {
    const {
      fullName,
      email,
      company,
      subject,
      message,
    } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const newContact = await Contact.create({
      fullName,
      email,
      company,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: newContact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  submitContact,
};