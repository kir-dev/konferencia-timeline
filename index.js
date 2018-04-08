const express = require('express');
var path = require('path');
const app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


app.get('/', (req, res) => res.render('index'));
app.get('/admin', (req, res) => res.render('admin'));

app.listen(3000, () => console.log('App listening on :' + 3000));
