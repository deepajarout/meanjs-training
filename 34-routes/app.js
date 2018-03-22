var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express();
app.use(multer({ dest: './public/images/users/'}));
//explain this
var session = require('express-session');
var login = require('./middleware/login');
var initialize = require('./middleware/initialize');

var flash = require('connect-flash'),
validator = require('express-validator');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(validator());
app.use(cookieParser('top-secret'));
app.use(session({
	secret: 'top-secret',
	saveUninitialized: false,
	resave: false,
        cookie: { maxAge: 30 * 24 * 60 * 1000 }
}));

app.use(flash());

app.use(function (req, res, next) {
  if(req.session && req.session.users){
    //do nothing
  }else{
      var users = [{
            id:1,
            name:"Deepa",
            password:"1234"
          },{
            id:2,
            name:"Divyanshi",
            password:"1234"
          },{
            id:3,
            name:"Koustav",
            password:"1234"
          },{
            id:4,
            name:"Akshay",
            password:"1234"
          },{
            id:5,
            name:"Manohar",
            password:"1234"
          }];
      req.session.users = users;
  }
  next();
});
var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', login.isLoggedIn, users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
