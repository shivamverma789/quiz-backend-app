// models/quizModel.js

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    rightAnswer: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'finished', 'resultAvailable'] 
        } 
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
