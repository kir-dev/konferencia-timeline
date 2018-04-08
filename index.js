const express = require('express');
var path = require('path');
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('App listening on :' + 3000));
