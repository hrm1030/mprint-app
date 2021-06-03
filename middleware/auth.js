exports.auth = function(req, res, next) {
  console.log(req.session)
  if(!req.session.authenticated) {
    res.redirect('/auth/login');
  } else {
    next();
  }
}

exports.auth_login = function(req, res, next) {
  console.log(req.session)
  if(req.session.authenticated) {
    res.redirect('/customer/view');
  } else {
    next();
  }
}