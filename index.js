const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

dal = require('./model/mongo.js');


var index = require('./routes/index');
var admin = require('./routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


app.use('/', index);
app.use('/admin', admin);

app.listen(3000, () => console.log('App listening on :' + 3000));
