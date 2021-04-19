var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var catalogRouter = require('./routes/catalog');

=======
var accountRouter = require('./routes/account');
>>>>>>> fb44cde941228efb9cb58fb3a04d8dae1949ac6d

var app = express();

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/catalog', catalogRouter);
=======
app.use('/account', accountRouter);
>>>>>>> fb44cde941228efb9cb58fb3a04d8dae1949ac6d

//connecting DB
const uri = process.env.db;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('connected db')
);

<<<<<<< HEAD
app.use(express.json());

=======
>>>>>>> fb44cde941228efb9cb58fb3a04d8dae1949ac6d
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

module.exports = app;
