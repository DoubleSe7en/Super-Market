var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/beverages', function(req, res, next) {
  res.render('beverages', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Express' });
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
});

router.get('/gourmet', function(req, res, next) {
  res.render('gourmet', { title: 'Express' });
});

router.get('/groceries', function(req, res, next) {
  res.render('groceries', { title: 'Express' });
});

router.get('/household', function(req, res, next) {
  res.render('household', { title: 'Express' });
});
router.get('/offers', function(req, res, next) {
  res.render('offers', { title: 'Express' });
});

router.get('/packagedfoods', function(req, res, next) {
  res.render('packagedfoods', { title: 'Express' });
});

router.get('/personalcare', function(req, res, next) {
  res.render('personalcare', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/registered', function(req, res, next) {
  res.render('registered', { title: 'Express' });
});

router.get('/short-codes', function(req, res, next) {
  res.render('short-codes', { title: 'Express' });
});

router.get('/single', function(req, res, next) {
  res.render('single', { title: 'Express' });
});


module.exports = router;
