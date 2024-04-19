// models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add any other fields you need for user management or authentication
});

module.exports = mongoose.model('User', userSchema);
