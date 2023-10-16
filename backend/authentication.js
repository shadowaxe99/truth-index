```javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./models.js').User;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());

// Function to generate JWT token
function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret, { expiresIn: '1800s' });
}

// Login route
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user == null) {
            return res.status(400).send('Cannot find user');
        }

        if(await bcrypt.compare(req.body.password, user.password)) {
            const username = req.body.username;
            const user = { name: username };
            const accessToken = generateAccessToken(user);
            res.json({ accessToken: accessToken });
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
});

// Middleware for authenticating JWT tokens
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = {
    app,
    authenticateToken
};
```