const User = require('../models/user.model');

module.exports.registerGet = function(req, res) {
  res.render('register', {
    errors: [],
  });
};

module.exports.registerPost = function(req, res) {
  const newUser = new User({
    email: req.body.email,
    userName: req.body.username,
    password: req.body.password,
  });

  newUser.save().then((item) => {
    res.redirect('/login');
  })
      .catch((err) => {
        res.status(400).send('unable to save to database');
      });
};
