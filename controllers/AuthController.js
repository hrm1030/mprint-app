var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var User = require('../models/User');

exports.signup = function(req, res, next) {
    User.findOne({username :req.body.username}, function(err, user) {
        if(err) {
            console.log(err);
        }
        if(user) {
            console.log('exists')
            res.status(200).send('This user already exists.');
        } else {
            if(req.body.password === req.body.repassword) {
                var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
                User.create({
                    username : req.body.username,
                    email : req.body.email,
                    password : hashedPassword
                },
                function (err, user) {
                    if (err) return res.status(500).send("There was a problem registering the user.")
                    // create a token
                    var token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                    });
                    res.render('login');
                }); 
            }else {
                res.status(200).send('The password is not confirmed.');
            }
            
        }
    })
    
}
exports.login = function(req, res, next) {
    res.render('login', {layout:false, title : 'Login'});
}
exports.signin = function(req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) {
            res.render('login', {title : 'Login', err : 'Please enter your email exactly.'});
        }else {
            var passwordIsValid = bcrypt.compare(req.body.password, user.password);
            if (!passwordIsValid) {
                res.render('login', {title : 'Login', err : 'Please enter your password exactly.'});
            } else {
                var token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                  });
                req.session.authenticated = true;
                req.session.user = user;
                req.session.token = token;
                req.session.save();
                // res.status(200).send({ auth: true, token: token });
                res.redirect('/customer/view');
      
            }
        }
      });
}