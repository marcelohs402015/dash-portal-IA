const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @desc    Generate a test JWT
// @route   GET /api/auth/generate-token
// @access  Public
router.get('/generate-token', authController.generateToken);

module.exports = router;
