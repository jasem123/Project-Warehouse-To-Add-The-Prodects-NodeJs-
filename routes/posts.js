var express = require('express');
var router = express.Router();
const db = require('../models/index')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.render('admin/posts' , {posts : await db.post.findAll()});
});

module.exports = router;
