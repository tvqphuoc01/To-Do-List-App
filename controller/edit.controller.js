const User = require('../models/user.model');

module.exports.editGet = async function(req, res) {
  const findUserId = await User.findById(req.cookies.userId).exec();

  res.render('edit', {
    highPriority: findUserId.highPriority,
    mediumPriority: findUserId.mediumPriority,
    lowPriority: findUserId.lowPriority,
  });
};
