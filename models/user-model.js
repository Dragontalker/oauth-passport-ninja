const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    googleId: String
});

const User = mongoose.model('user', userSchema);