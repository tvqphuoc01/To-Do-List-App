const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userName: String,
  avatar: String,
  toDoList: [{
    type: String,
  }],
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
