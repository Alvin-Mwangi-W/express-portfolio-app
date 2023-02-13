var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const user = require('./models/user.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { urlencoded } = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const bcrypt = require('bcrypt');


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

// Mongo Configuration 
// Connect to the MongoDB database in the app.js file:
//const MongoClient = require('mongodb').MongoClient;

// Connect to the database
//mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });

// Get the connection
//const db = mongoose.connection;

// Check for a connection error
//db.on('error', console.error.bind(console, 'connection error:'));

// When the connection is open
//db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const db = client.db("test");
//   console.log("Connected to MongoDB");
// });


module.exports = app;
