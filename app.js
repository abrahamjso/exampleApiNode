// Load Our Modules
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./routes/movies');
var mongoose = require('mongoose');

var app = express();


//connect to our database
//Ideally you will obtain DB details from a config file
var dbName='movieDB';
//port :27017
var connectionString='mongodb://localhost:27017/'+dbName;
mongoose.connect(connectionString);


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', movies);

module.exports = app;
