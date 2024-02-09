// load the things we need
var express = require('express');
var app = express();

//
app.use(express.static('./public'));

// set the view engine to ejs
app.set('view engine', 'ejs');
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/src/views');

// index page
app.get('/', function(req, res) {
    res.render('users/index');
});

// login page
app.get('/login', function(req, res) {
    res.render('users/login');
});

// register page
app.get('/register', function(req, res) {
    res.render('users/register');
});

// register productDetail
app.get('/productDetail', function(req, res) { 
    res.render('products/productDetail')
});

// register productCart
app.get('/productCart', function(req, res) { 
    res.render('products/productCart')
});

app.listen(8080);
console.log('8080 puerto usado, Api funcionando');

