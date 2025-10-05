const express = require('express');
const cors = require('cors');
const { exec } = require('child_process'); // Import exec
const projectRoutes = require('./routes/projects');
const authRoutes = require('./routes/auth'); // Import auth routes
const categoryRoutes = require('./routes/categories'); // Import category routes

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

// Use routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/categories', categoryRoutes); // Use category routes

const PORT = process.env.PORT || 3001;

// Função para rodar as migrações
const runMigrations = () => {
  return new Promise((resolve, reject) => {
    const migrate = exec(
      'npm run migrate:up',
      { env: process.env },
      (err, stdout, stderr) => {
        if (err) {
          console.error('Migration error:', stderr);
          return reject(err);
        }
        console.log('Migrations successful:', stdout);
        resolve();
      }
    );
  });
};

const startServer = async () => {
  try {
    console.log('Running database migrations...');
    await runMigrations();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

