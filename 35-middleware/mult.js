var express = require('express');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
 
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.post('/profile', upload.single('pic'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  //res.end('in upload');
  console.log(JSON.stringify(req.file));
  fs.createReadStream(path.join('/', req.file.path)).pipe(res);
});
 
app.get('/photos/upload',function(req,res){
    res.render('upload');
});
app.post('/photos/upload', upload.array('pic', 12), function (req, res, next) {
  // req.files is array of `photos` files 
  // req.body will contain the text fields, if there were any 
  console.log(req.files);
  res.end('in upload');
});
 
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
  // 
  // e.g. 
  //  req.files['avatar'][0] -> File 
  //  req.files['gallery'] -> Array 
  // 
  // req.body will contain the text fields, if there were any 
});

app.listen(3000);