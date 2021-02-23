module.exports.loginGet = function(req, res) {
  res.render('login');
};

module.exports.loginPost = function(req, res) {
  res.redirect('/');
};
