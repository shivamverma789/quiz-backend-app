// config/cron.js

const cron = require('node-cron');
const { updateQuizStatus } = require('../services/quizService');

// Schedule cron job to update quiz status every minute
cron.schedule('* * * * *', updateQuizStatus);
