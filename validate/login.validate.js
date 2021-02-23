const userModel = require('../models/user.model');

module.exports.loginValidate = async function(req, res, next) {
  let errors = [];

  if (!req.body.username) {
    errors.push('Username is required !!!');
  }

  if (!req.body.password) {
    errors.push('Password is required !!!');
  }

  if (errors.length !== 0) {
    res.render('login', {
      errors: errors,
      values: req.body,
    });

    return;
  }

  errors = [];

  const findUser = await userModel.findOne({
    userName: req.body.username,
    password: req.body.password,
  }).exec();

  if (findUser === null) {
    errors.push('Wrong Username or Password !!!');
    res.render('login', {
      errors: errors,
      values: req.body,
    });
    return;
  }

  res.cookie('userId', findUser.id);
  next();
};
