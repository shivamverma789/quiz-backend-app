// models/quizModel.js

const mongoose = require('mongoose');

// Define the schema for the quiz data
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
        enum: ['active', 'finished', 'resultAvailable'] // Status can be 'active', 'finished', or 'resultAvailable'
        } 
});

// Create a Quiz model using the schema
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
