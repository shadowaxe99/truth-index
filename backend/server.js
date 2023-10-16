```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

// Routes
app.use('/api', routes);

// Server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
```