var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var upload = multer(); 
var session = require('express-session');

/**Router */
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var customerRouter = require('./routes/customer');
var supplierRouter = require('./routes/supplier');
var providerRoute = require('./routes/provider');
var paperRoute = require('./routes/paper');
/**End Router */

var app = express();

/** MongoDB connect */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mprint', {useNewUrlParser: true, useUnifiedTopology: true});
/** End DB connect */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
/** End view engine setup */

/** Session setup */
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
/** End session setup */


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(upload.array());
app.use(session({secret: "mprint"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/customer', customerRouter);
app.use('/supplier', supplierRouter);
app.use('/provider', providerRoute);
app.use('/paper', paperRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, function() {
  console.log(`This app is running on localhost:8080`);
});

module.exports = app;
