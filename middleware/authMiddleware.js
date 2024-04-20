// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');

// Middleware function to authenticate user using JWT token
exports.authenticateUser = (req, res, next) => {
    // Extract the JWT token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    try {
        // Verify the JWT token using the secret key
        const decoded = jwt.verify(token, jwtSecret);
        // If token is valid, attach the decoded user information to the request object
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
