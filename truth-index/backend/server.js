// backend/server.js

// This file sets up the server and handles requests

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const userRoutes = require('./routes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});