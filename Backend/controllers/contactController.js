const Message = require('../models/Message');

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide name, email, and message.' });
        }

        // Create a new message document
        const newMessage = new Message({
            name,
            email,
            message
        });

        // Save to database
        await newMessage.save();

        return res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error in submitContactForm:', error);
        return res.status(500).json({ error: 'An error occurred while sending your message. Please try again later.' });
    }
};
