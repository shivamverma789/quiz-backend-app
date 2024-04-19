// services/quizService.js

const Quiz = require('../models/quizModel');

exports.updateQuizStatus = async () => {
    try {
        const currentDateTime = new Date();
        const activeQuizzes = await Quiz.find({
            startDate: { $lte: currentDateTime },
            endDate: { $gte: currentDateTime }
        });

        const finishedQuizzes = await Quiz.find({ endDate: { $lt: currentDateTime } });

        // Update status for active quizzes
        await Promise.all(activeQuizzes.map(async (quiz) => {
            quiz.status = 'active';
            await quiz.save();
        }));

        // Update status for finished quizzes
        await Promise.all(finishedQuizzes.map(async (quiz) => {
            quiz.status = 'finished';
            await quiz.save();
        }));

        // Update status to 'resultAvailable' for quizzes where 5 minutes have passed after end time
        const quizzesToUpdate = await Quiz.find({ 
            endDate: { $lt: currentDateTime },
            status: { $ne: 'resultAvailable' } // Exclude quizzes already marked as 'resultAvailable'
        });

        await Promise.all(quizzesToUpdate.map(async (quiz) => {
            const resultTime = new Date(quiz.endDate);
            resultTime.setMinutes(resultTime.getMinutes() + 5); // Add 5 minutes to end time
            if (currentDateTime > resultTime) {
                quiz.status = 'resultAvailable';
                await quiz.save();
            }
        }));
    } catch (error) {
        console.error('Error updating quiz status:', error);
    }
};
