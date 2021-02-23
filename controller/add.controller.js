const User = require('../models/user.model');

module.exports.add = async function(req, res) {
  let findUserId = await User.findById(req.cookies.userId).exec();

  // eslint-disable-next-line prefer-const
  let event = {
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
  };

  if (req.body.select === '1') {
    User.update(
        {_id: findUserId.id},
        {$push: {highPriority: event}},
    ).then();
  } else if (req.body.select === '2') {
    User.update(
        {_id: findUserId.id},
        {$push: {mediumPriority: event}},
    ).then();
  } else if (req.body.select === '3') {
    User.update(
        {_id: findUserId.id},
        {$push: {lowPriority: event}},
    ).then();
  }
  /** Update new data for findUserId */
  findUserId = await User.findById(req.cookies.userId).exec();

  res.render('edit', {
    highPriority: findUserId.highPriority,
    mediumPriority: findUserId.mediumPriority,
    lowPriority: findUserId.lowPriority,
  });
};
