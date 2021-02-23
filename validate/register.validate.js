const userModel = require('../models/user.model');

module.exports.validateNewUser = async function(req, res, next) {
  const checkEmail = await userModel.exists({email: req.body.email});
  const checkUserName = await userModel.exists({userName: req.body.username});

  let errors = [];

  if (!req.body.username) {
    errors.push('Username is required !!!');
  }

  if (!req.body.password) {
    errors.push('Password is required !!!');
  }

  if (!req.body.email) {
    errors.push('Email is required !!!');
  }

  if (errors.length !== 0) {
    res.render('register', {
      errors: errors,
      values: req.body,
    });

    return;
  }

  errors = [];

  if (checkUserName !== false) {
    errors.push('Sorry...Username already exist !!!');
  }

  if (checkEmail !== false) {
    errors.push('This email has been taken, Do you already has an account?');
  }

  if (req.body.password.length < 8) {
    errors.push('Password must have at least 8 characters !!!');
  }

  if (errors.length !== 0) {
    res.render('register', {
      errors: errors,
      values: req.body,
    });

    return;
  }

  next();
};
