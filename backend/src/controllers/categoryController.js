const db = require('../config/db');

// @desc    Create a new category
// @route   POST /api/categories
// @access  Private (protected)
const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Category name is required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO "Categories" (name) VALUES ($1) RETURNING *',
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    // Check for unique constraint violation
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Category already exists' });
    }
    res.status(500).json({ error: 'Server error while creating category' });
  }
};

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM "Categories" ORDER BY name ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while fetching categories' });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
