const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userName: String,
  highPriority: [{
    title: String,
    description: String,
    time: String,
  }],
  mediumPriority: [{
    title: String,
    description: String,
    time: String,
  }],
  lowPriority: [{
    title: String,
    description: String,
    time: String,
  }],
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
