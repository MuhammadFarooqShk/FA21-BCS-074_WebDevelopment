var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact');
});

router.get('/api-example', function(req, res, next) {
  res.render('api');
});

router.get('/product', function(req, res, next) {
  res.render('product');
});

module.exports = router;
