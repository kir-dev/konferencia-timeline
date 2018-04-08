var express = require('express');
var router = express.Router();

var model = require('../model/mongo');
var adminCheck = require('../modules/admincheck');

router.get('/', function(req, res){
    res.render('login');
});

router.post('/login', adminCheck(), function(req, res){
    res.render('admin');
})