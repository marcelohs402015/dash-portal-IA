const db = require('../config/db');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getAllProjects = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get a single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM Projects WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new project
// @route   POST /api/projects
// @access  Protected
const createProject = async (req, res) => {
  try {
    const { client_name, client_email, project_title, original_email_body } = req.body;
    const { rows } = await db.query(
      'INSERT INTO Projects (client_name, client_email, project_title, original_email_body) VALUES ($1, $2, $3, $4) RETURNING *',
      [client_name, client_email, project_title, original_email_body]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a project (e.g., change status)
// @route   PUT /api/projects/:id
// @access  Protected
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // For now, only updating status
    const { rows } = await db.query(
      'UPDATE Projects SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new quote for a project
// @route   POST /api/projects/:id/quotes
// @access  Protected
const createQuote = async (req, res) => {
  // Placeholder for quote creation logic
  res.status(201).json({ message: `Quote created for project ${req.params.id}` });
};


module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  createQuote,
};
