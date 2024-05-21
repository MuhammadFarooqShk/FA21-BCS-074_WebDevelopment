var express = require('express');
var router = express.Router();
const authmid=require('../middlewares/auth')
const midware=require('../middlewares/main-middleware')
/* GET home page. */
router.get('/',midware,authmid, function(req, res, next) {
  res.render('landingpage');
});

router.get('/home',authmid,function(req,res){
  res.render('landingpage')
})

router.get('/contact-us',authmid ,function(req, res, next) {
  res.render('contact');
});

router.get('/api-example',authmid ,function(req, res, next) {
  res.render('api');
});

router.get('/product',authmid, function(req, res, next) {
  res.render('product',{items: global.items});
});

router.get('/about',authmid, function(req, res, next) {
  res.render('about');
});


router.post("/package", (req, res) => {
  try {
    res.send(global.items);
  } catch (e) {
    res.send(e);
  }
});

router.get("/package", (req, res) => {
  try {
    res.send(global.items);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
