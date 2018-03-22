var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blogs', { title: 'My blog list' });
});

/* GET blog detail page. */
router.get('/blog/:blog-name', function(req, res, next) {
  res.render('blog-detail', { title: 'Blog Detail Page' });
});

/* GET project list page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My project list' });
});

/* GET project detail page. */
router.get('/projects/:project-name', function(req, res, next) {
  res.render('project-detail', { title: 'Project Detail Page' });
});

/* GET my resume pdf. */
router.get('/resume', function(req, res, next) {
  // will implement login to send the resume pdf document
});

module.exports = router;
