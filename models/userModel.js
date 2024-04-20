// models/userModel.js

const mongoose = require('mongoose');

// Define the schema for the user data
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
});

// Create a User model using the schema
module.exports = mongoose.model('User', userSchema);
