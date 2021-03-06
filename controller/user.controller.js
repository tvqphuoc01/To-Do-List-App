const User = require('../models/user.model');

module.exports.userGet = async function(req, res) {
  const findUserId = await User.findById(req.cookies.userId).exec();

  res.render('index', {
    highPriority: findUserId.highPriority,
    mediumPriority: findUserId.mediumPriority,
    lowPriority: findUserId.lowPriority,
  });
};
