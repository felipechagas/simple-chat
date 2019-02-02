/* import express framework */
var express = require('express');

/* import consign module */
var consign = require('consign');

/* import body-parser module */
var bodyParser = require('body-parser');

/* import express-validator module */
var expressValidator = require('express-validator');

/* inicializing express */
var app = express();

/* setting 'view engine' and 'views' express variables */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* config express.static middleware */
app.use(express.static('./app/public'));

/* config body-parser middleware */
app.use(bodyParser.urlencoded({extended: true}));

/*config express-validator middleware */
app.use(expressValidator());

/* routes, models and controllers autoload */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/* export express instance */
module.exports = app;