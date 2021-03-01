module.exports.logoutUser = function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        res.clearCookie('userId', {path: '/'});
        return res.redirect('/login');
      }
    });
  }
};
