const userModel = require('../models/user.model');

module.exports.authMiddleware = async function(req, res, next) {
  if (req.body.cookie) {
    res.redirect('/login');
    return;
  }

  const findUserId = await userModel.findById(req.cookies.userId).exec();

  if (findUserId === null) {
    res.redirect('/login');
    return;
  }

  next();
};
