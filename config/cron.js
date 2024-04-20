// config/cron.js

const cron = require('node-cron');
const { updateQuizStatus } = require('../services/quizService');

// Schedule cron job to update quiz status every minute and call the function updatequizStatus which will automatically change the status 
cron.schedule('* * * * *', updateQuizStatus);
