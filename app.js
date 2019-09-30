let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let controller = require("./controller/solutions.js")
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let app = express();

// SOLUTIONS

let problem1 = require("./controller/problem1.js")
let problem2 = require("./controller/problem2.js")
let problem3 = require("./controller/problem3.js")
let problem4 = require("./controller/problem4.js")
let problem5 = require("./controller/problem5.js")
let problem6 = require("./controller/problem6.js")
let problem7 = require("./controller/problem7.js")
let problem8 = require("./controller/problem8.js")
let problem9 = require("./controller/problem9.js")
let problem10 = require("./controller/problem10.js")
let problem11 = require("./controller/problem11.js")
let problem12 = require("./controller/problem12.js")
let problem13 = require("./controller/problem13.js")
let problem14 = require("./controller/problem14.js")
let problem15 = require("./controller/problem15.js")
let problem16 = require("./controller/problem16.js")
let problem17 = require("./controller/problem17.js")
let problem18 = require("./controller/problem18.js")
let problem19 = require("./controller/problem19.js")
let problem20 = require("./controller/problem20.js")
let problem21 = require("./controller/problem21.js")
let problem22 = require("./controller/problem22.js")
let problem25 = require("./controller/problem25.js")
let problem26 = require("./controller/problem26.js")
let problem28 = require("./controller/problem28.js")
let problem29 = require("./controller/problem29.js")
let problem30 = require("./controller/problem30.js")
let problem31 = require("./controller/problem31.js")
let problem34 = require("./controller/problem34.js")
let problem35 = require("./controller/problem35.js")
let problem36 = require("./controller/problem36.js")
let problem37 = require("./controller/problem37.js")
let problem39 = require("./controller/problem39.js")
let problem42 = require("./controller/problem42.js")
let problem43 = require("./controller/problem43.js")
let problem44 = require("./controller/problem44.js")
let problem45 = require("./controller/problem45.js")
let problem48 = require("./controller/problem48.js")
let problem49 = require("./controller/problem49.js")
let problem50 = require("./controller/problem50.js")
let problem52 = require("./controller/problem52.js")
let problem53 = require("./controller/problem53.js")
let problem55 = require("./controller/problem55.js")
let problem56 = require("./controller/problem56.js")
let problem59 = require("./controller/problem59.js")
let problem60 = require("./controller/problem60.js")
let problem67 = require("./controller/problem67.js")

const dotenv = require('dotenv');
dotenv.config();

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

// app.use('/', problem1.q1);
// app.use('/', problem2.q2);
// app.use('/', problem3.q3);
// app.use('/', problem4.q4);
// app.use('/', problem5.q5);
// app.use('/', problem6.q6);
// app.use('/', problem7.q7);
// app.use('/', problem8.q8);
// app.use('/', problem9.q9);
// app.use('/', problem10.q10);
// app.use('/', problem11.q11);
// app.use('/', problem12.q12);
// app.use('/', problem13.q13);
// app.use('/', problem14.q14);
// app.use('/', problem15.q15);
// app.use('/', problem16.q16);
// app.use('/', problem17.q17);
// app.use('/', problem18.q18);
// app.use('/', problem19.q19);
// app.use('/', problem20.q20);
// app.use('/', problem21.q21);
// app.use('/', problem22.q22);
// app.use('/', problem25.q25);
// app.use('/', problem26.q26);
// app.use('/', problem28.q28);
// app.use('/', problem29.q29);
// app.use('/', problem30.q30);
// app.use('/', problem31.q31);
// app.use('/', problem34.q34);
// app.use('/', problem35.q35);
// app.use('/', problem36.q36);
// app.use('/', problem37.q37);
// app.use('/', problem39.q39);
// app.use('/', problem42.q42);
// app.use('/', problem44.q44);
// app.use('/', problem45.q45);
// app.use('/', problem48.q48);
// app.use('/', problem49.q49);
// app.use('/', problem50.q50);
// app.use('/', problem52.q52);
// app.use('/', problem53.q53);
// app.use('/', problem55.q55);
// app.use('/', problem56.q56);
// app.use('/', problem59.q59);
app.use('/', problem60.q60);
// app.use('/', problem67.q67);






app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



module.exports = app;