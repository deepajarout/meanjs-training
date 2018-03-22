var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  var data = req.body;
  console.log(JSON.stringify(data));
  if(data.userid && data.userid === "mnegi"){
    res.render('profile',{layout: 'layout2','albums':
      [{
        title:"Album 1",
        coverPic: "/images/1.jpg",
        description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },{
        title:"Album 2",
        coverPic: "/images/2.jpg",
        description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },{
        title:"Album 3",
        coverPic: "/images/3.jpg",
        description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },{
        title:"Album 4",
        coverPic: "/images/4.jpg",
        description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }]
    });
  }else{
    res.redirect('/users/login');
  }
  
});

module.exports = router;
