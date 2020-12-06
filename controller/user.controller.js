const User = require('../models/user.model');

module.exports.userPost = function(req, res) {
  console.log(req.body);
  const newUser = new User(
      {$push: {toDoList: req.body.content}},
  );
  newUser.toDoList.push(req.body.content);
  newUser.save().then((item) => {
    res.send('item saved to database');
  })
      .catch((err) => {
        console.log(err);
        res.status(400).send('unable to save to database');
      });
};

module.exports.userGet = function(req, res) {
  res.render('index');
};
