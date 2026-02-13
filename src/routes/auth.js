// src/routes/auth.js

const express = require('express');
const router = express.Router();

// Mock User Data
let users = [];

// Signup Route
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).send('User already exists.');
    }
    users.push({ username, password }); // Passwords should be hashed in real applications.
    res.status(201).send('User created successfully.');
});

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials.');
    }
    res.status(200).send('Login successful.');
});

module.exports = router;
