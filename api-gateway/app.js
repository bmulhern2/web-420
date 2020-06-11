/*
Title: Assignment 2,3,
Author: Professor Krasso && Express Generator,
Date: 9 May 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://bmulhern2:Bmole22%21%21@cluster0-eopst.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  promiseLibrary: require('bluebird')
}).then(() => console.log('connection successful'))
.catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', apiCatalog);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
