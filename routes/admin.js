var express = require('express');
var router = express.Router();

var model = require('../model/mongo');
var adminCheck = require('../modules/admincheck');
var createEvent = require('../modules/createEvent');
var listEvents = require('../modules/listEvents');

router.get('/', function(req, res){
    res.render('login');
});

router.post('/login', adminCheck,  function(req, res){
    res.redirect('/admin/events');
});

router.get('/events', adminCheck, listEvents, function(req, res){
    res.render('adminList', {
        events: res.events
    });
});

router.post('/events', adminCheck, createEvent, function(req, res){
    res.redirect('/admin/events')
});

router.post('/createEvent', createEvent, listEvents, function(req, res){
    res.render('adminList');
});


module.exports = router;