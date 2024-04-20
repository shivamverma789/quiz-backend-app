// routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const quizController = require('../controllers/quizController');

// Import authenticateUser middleware
const { authenticateUser } = authMiddleware;

// POST /quizzes - Create a new quiz
router.post('/', authenticateUser, quizController.createQuiz);

// GET /quizzes/active - Retrieve the currently active quiz
router.get('/active', authenticateUser, quizController.getActiveQuizzes);

// GET /quizzes/:id/result - Retrieve the result of a quiz by ID
router.get('/:id/result', authenticateUser, quizController.getQuizResult);

// GET /quizzes/all - Retrieve all quizzes (including inactive and finished)
router.get('/all', authenticateUser, quizController.getAllQuizzes);

module.exports = router;
