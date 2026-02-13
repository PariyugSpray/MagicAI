'use strict';

const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from the Authorization header
    if (token == null) return res.sendStatus(401); // If there's no token, return 401

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { // Verify the token
        if (err) return res.sendStatus(403); // If the token is invalid, return 403
        req.user = user; // Store user information in request object
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateToken;
