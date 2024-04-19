const rateLimit = require('express-rate-limit');

// Create a rate limiter with the desired options
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 1, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later'
});

module.exports = limiter;
