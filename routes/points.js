var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('points.jade', { title: 'Points!!'});
});

module.exports = router;