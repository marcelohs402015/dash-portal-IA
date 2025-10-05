const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projects');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

// Use routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes); // Use auth routes

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
