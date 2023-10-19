// backend/routes.js

// This file defines the routes for handling requests

const express = require('express');
const router = express.Router();

// Import controllers
const { getUser, createUser, updateUser, deleteUser } = require('./controllers');

// Define routes
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;