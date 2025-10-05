const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
} = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');

// As rotas de categoria
router.post('/', authMiddleware, createCategory); // Protegida
router.get('/', getCategories); // Pública para listagem

module.exports = router;
