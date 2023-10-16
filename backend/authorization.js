```javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const jwtSecret = process.env.JWT_SECRET;

// Middleware for checking if JWT token exists and verifying it if it does exist.
// In all future routes, this helps to know if the request is authenticated or not.
app.use((req, res, next) => {
  // Check for token in header
  if (req.headers['authorization']) {
    try {
      let authorization = req.headers['authorization'].split(' ');
      if (authorization[0] !== 'Bearer') {
        return res.status(401).json();
      } else {
        req.jwt = jwt.verify(authorization[1], jwtSecret);
        return next();
      }
    } catch (err) {
      return res.status(403).json();
    }
  } else {
    return res.status(401).json();
  }
});

module.exports = app;
```