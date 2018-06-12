var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(points);
});

router.get('/random', function(req, res, next){
    var pt = {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100)
    }
    res.send(pt);
});

router.post('/', function(req, res, next){
    if(req.body.hasOwnProperty('x') && req.body.hasOwnProperty('y')){
        points.push({x: req.body.x, y: req.body.y})
        res.status(200).end();
    }
    else{
        res.status(400).end();
    }
    
});

router.post('/random', function(req, res, next){
    var pt = {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100)
    }
    points.push(pt);
    res.status(200).end();
});

module.exports = router;