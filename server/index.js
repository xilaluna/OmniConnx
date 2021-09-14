const test = "test"
const path = require("path");
const express = require('express');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
//const exphbs  = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//require('./data/ourdbname');
port = 3000

app.use(expressValidator());
app.use(cookieParser());
app.use(methodOverride('_method'));

/*
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main'
}));
*/

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'handlebars');


//require('./controllers/auth.js')(app);
// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
    
  
  module.exports = app;
  