var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{title:'Login to admin dashboard'})
});

module.exports = router;
