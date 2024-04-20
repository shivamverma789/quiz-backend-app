// Import required modules
const express = require('express'); // Import Express framework
const path = require('path'); // Import path module for file paths
require('dotenv').config(); // Import dotenv for environment variables

// Import custom modules
const connectDB = require('./config/database'); // Import function to connect to MongoDB
const rateLimiter = require('./middleware/rateLimit'); // Import rate limiter middleware
const quizRoutes = require('./routes/quizRoutes'); // Import routes for quizzes
const authRoutes = require('./routes/authRoutes'); // Import routes for authentication
const handleErrors = require('./middleware/errorMiddleware'); // Import error handling middleware
const authMiddleware = require('./middleware/authMiddleware'); // Import authentication middleware


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
