// routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const quizController = require('../controllers/quizController');

// Import authenticateUser middleware
const { authenticateUser } = authMiddleware;

// authenticateUser,

// POST /quizzes - Create a new quiz
router.post('/', quizController.createQuiz);
router.get('/active', quizController.getActiveQuizzes);
router.get('/:id/result', quizController.getQuizResult);
router.get('/all', quizController.getAllQuizzes);


module.exports = router;
