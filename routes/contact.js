const express = require('express');
const router = express.Router();

// Contact form submission endpoint
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you would typically save to database
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, message });
    
    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

module.exports = router; 