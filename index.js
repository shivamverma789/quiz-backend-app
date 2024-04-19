const express = require('express');
const path = require('path'); 
require('dotenv').config();

const connectDB = require('./config/database');
const rateLimiter = require('./middleware/rateLimit');
const quizRoutes = require('./routes/quizRoutes');
const authRoutes = require('./routes/authRoutes');
const handleErrors = require('./middleware/errorMiddleware');
const authMiddleware = require('./middleware/authMiddleware');

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Import and execute the cron job configuration to automate status updates for quizzes
require('./config/cron');

// Apply rate limiter middleware to all routes
app.use(rateLimiter);

// Middleware
app.use(express.json());


// Error handling middleware
app.use(handleErrors);

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/quizzes', authMiddleware.authenticateUser,  quizRoutes); // Protected routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
