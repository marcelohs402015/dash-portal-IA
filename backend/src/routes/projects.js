const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

// Rotas públicas
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);

// Rotas protegidas
router.post('/', authMiddleware, projectController.createProject);
router.put('/:id', authMiddleware, projectController.updateProject);
router.post('/:id/quotes', authMiddleware, projectController.createQuote);

module.exports = router;
