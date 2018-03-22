var express = require('express');
var router = express.Router();
var multer  = require('multer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('inside list');
  //res.send('respond with a resource');
  res.render('users',{users:req.session.users});
});

// create user - form
router.get('/create', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('user-create');
});

// create user - form submit
router.post('/create', function(req, res, next) {
  var userName = req.body.name;
  var userId = req.body.id;
  var userPass = req.body.password;
  req.session.users.push({name:userName,id:userId,password:userPass});
  res.redirect('/users');
});

/* GET user details. */
router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  var profilePic = req.query.pic;
  var showPic = false;
  if(profilePic && profilePic === 'true'){
    showPic= true;
  }
  var data;
  var found = false;
  var users = req.session.users;

  for(i=0;i<users.length;i++){
    if(users[i].name === username){
      data = users[i];
      found = true;
      break;
    }
  }
  if(found){
    res.render('user-detail',{user:data,profilePic:showPic});
  }else{
    res.render('error',{message:'User not found with name '+ username,error: {status:404,stack:''} });
  }
});

router.post('/upload',function(req, res){
    console.log('body ->' +req.body) // form fields
    console.log('files ->' + req.files) // form files
    res.status(204).end();
});

module.exports = router;
