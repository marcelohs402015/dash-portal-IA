const jwt = require('jsonwebtoken');

// @desc    Generate a test JWT for development/testing
// @route   GET /api/auth/generate-token
// @access  Public
const generateToken = (req, res) => {
  try {
    // In a real app, you'd generate a token after a successful login.
    // For testing, we'll just create a dummy token.
    const payload = {
      user: 'n8n_workflow',
      id: 'service_account_id', // Example service account ID
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d', // Token valid for 1 day
    });

    res.json({
      message: 'Use this token in the Authorization header (Bearer Token)',
      token: token,
    });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ message: 'Failed to generate token' });
  }
};

module.exports = {
  generateToken,
};
