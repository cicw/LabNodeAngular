//Set Up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = 8081;
var host = 'localhost';
var database = require('./app/config/mongoDB');

//Database
mongoose.connect(database.url);

//Routes
require('./app/routes/routes.js')(app);
require('./app/routes/routesXML.js')(app);
require('./app/routes/routesMongo.js')(app);


//Server
var server = app.listen(port, host, function () {
  console.log("LabNode app listening at http://%s:%s", host, port)
})
