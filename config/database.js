const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/quizz");
  
// Connection event handlers
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Database connected");
}).on('error', err => {
  console.log("Connection failed:", err);
});
//     try {
//         await mongoose.connect('mongodb://localhost:27017/quiz-app', {
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1); // Exit process with failure
//     }
};

module.exports = connectDB;

//database connection

