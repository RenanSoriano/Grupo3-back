const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Local Modules
//const myRoute = require('./routes/myRoute.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Routes will be written here
//app.use('/route', myRoute);

app.listen(PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, 
                 and App is listening on port "+ PORT)
  else 
      console.log("Error occurred, server can't start", error);
  }
);

const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)


module.exports = app;







/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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

module.exports = app;*/
