const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const authentication = require('../middleware/auth.js')

const app = express();

// The following link all of the routes to the server
// make sure to add each of the different route files below with specific 
// name and add them to the bottom of the middleware
const userRoutes = require('../../../routes/userRoutes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan('dev'));
// app.use(authentication)

app.use(express.static(path.join(__dirname, '../../../../client/src/index.js')));

app.use('/api/', userRoutes);

module.exports = app;