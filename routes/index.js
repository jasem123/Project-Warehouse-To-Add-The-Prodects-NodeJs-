var express = require('express');
var router = express.Router();

const db = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {

  db.post.findAll().then((data)=>{
    res.render('home', {posts: data});
  })

  // console.log("stage 1");
  // next();



// }, function(req , res , next){
//   console.log("stage 2");
//   next();
  
// }, function(req , res , next){
//   console.log("stage 3");
//   next();
  
// }, function(req , res , next){
//   res.render('index', { title: 'Express' });
});

router.get('/login' , (req , res , next)=>{
  res.send("login");
});
module.exports = router;
