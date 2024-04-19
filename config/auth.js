// config/auth.js

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'itsSecret' // Secret key for JWT token generation
};
