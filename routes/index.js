
var express = require('express');
var router = express.Router();

router.get('/ib028', function(req, res, next) {
  res.render('index', {room: 0});
});

router.get('/ib025', function(req, res, next) {
  res.render('index', {room: 1});
});

module.exports = router;
