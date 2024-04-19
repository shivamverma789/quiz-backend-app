// controllers/quizController.js

const Quiz = require('../models/quizModel');

// Controller function to create a new quiz
exports.createQuiz = async (req, res, next) => {
    try {
        console.log(req.body);
        const { question, options, rightAnswer, startDate, endDate } = req.body;
        
        // Validate required fields
        if (!question || !options || !startDate || !endDate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create new quiz object
        const quiz = new Quiz({
            question,
            options,
            rightAnswer,
            startDate,
            endDate
        });

        // Save quiz to the database
        await quiz.save();

        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create quiz' });
    }
};

// Controller function to get active quizzes
exports.getActiveQuizzes = async (req, res) => {
    try {
        const activeQuizzes = await Quiz.find({ status: 'active' });
        res.status(200).json(activeQuizzes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get active quizzes' });
    }
};


// Controller function to get quiz result by ID
exports.getQuizResult = async (req, res, next) => {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        const currentDateTime = new Date();
        const resultTime = new Date(quiz.endDate);
        resultTime.setMinutes(resultTime.getMinutes() + 5); // Add 5 minutes to end time

        // Check if the current time is before the allowed access time
        if (currentDateTime < resultTime && quiz.status !== 'resultAvailable') {
            // Return a 403 Forbidden response if the current time is before the allowed access time
            return res.status(403).json({ message: 'Access to quiz result is not allowed yet' });
        }

        // Extract correct answers using the rightAnswer index
        const correctAnswers = quiz.options[quiz.rightAnswer];

        // Return the correct answers
        res.status(200).json({ correctAnswers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get quiz result' });
    }
};


// Controller function to get all quizzes
exports.getAllQuizzes = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json({ quizzes }); // Response includes a list of quiz objects
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get all quizzes' });
    }
};