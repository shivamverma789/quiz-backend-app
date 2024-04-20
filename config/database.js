const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect( process.env.MONGO_URL );
  
  // Connnection to database 
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("Database connected");
  }).on('error', err => {
    console.log("Connection failed:", err);
  });
};

module.exports = connectDB;



