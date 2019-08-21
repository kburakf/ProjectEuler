var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var controller = require("./controller/solutions.js")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', controller.q1);
// app.use('/', controller.q2);
// app.use('/', controller.q3);
// app.use('/', controller.q4);
// app.use('/', controller.q5);
// app.use('/', controller.q6);
// app.use('/', controller.q7);
// app.use('/', controller.q8);
// app.use('/', controller.q9);
// app.use('/', controller.q10);
// app.use('/', controller.q11);
// app.use('/', controller.q12);
// app.use('/', controller.q13);
// app.use('/', controller.q14);
// app.use('/', controller.q15);
// app.use('/', controller.q16);
// app.use('/', controller.q17);
// app.use('/', controller.q18);
// app.use('/', controller.q19);
// app.use('/', controller.q20);
app.use('/', controller.q22);
// app.use('/', controller.q25);






app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



module.exports = app;