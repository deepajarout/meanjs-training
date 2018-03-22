var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  //res.send('respond with a resource');
  if(req.session.isAuthenticated){
    res.redirect('/users');
  }else{
    res.render('login');
  }
});

router.post('/login', function(req, res, next) {

  req.checkBody('userid', 'User Id is required').
		notEmpty().withMessage('Please enter a valid user id');
  req.checkBody('password', 'Password is required').notEmpty();
  
  var errors = req.validationErrors();
  var messages = [];
	if (errors) {
		errors.forEach(function(error) {
			messages.push({message: error.msg});
			console.log('error -> '+ error.msg);
		});
		//req.flash('error', messages);
		res.render('login', {
			hasErrors: messages.length > 0,
			errors: messages
		});
	}else{
    var userid = req.body.userid;
    var pass = req.body.password;
    var isValid = false;
    var user = null;
    for(i=0; i< req.session.users.length;i++){
      if(req.session.users[i].name === userid && req.session.users[i].password === pass){
        isValid = true;
        user = req.session.users[i];
        break;
      }
    }

    if(isValid){
      req.session.isAuthenticated = true;
      req.session.user = user;

      if(req.session.oldUrl){
        console.log('old url -- ' +req.session.oldUrl);
        res.redirect('/users'+ req.session.oldUrl);
      }else{
        res.redirect('/users/'+userid + '?pic=true');
      }
    }else{
      // set a message and pass it to ui
      // in the ui read this and display
      messages.push({message: 'Invalid Login Credntials'});
      res.render('login', {
        hasErrors: messages.length > 0,
        errors: messages,
        data: req.body
      });
    }
  }
});

router.get('/logout', function(req, res, next) {
  req.session.isAuthenticated = false;
  delete req.session.user;
  res.redirect('/');
});

module.exports = router;
