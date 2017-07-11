'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var members = require('./routes/members');
var legislation = require('./routes/legislation');
var home = require('./routes/home');

//var db = mongoose.connect('mongodb://localhost/kapitol-db');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//API ROUTES
app.use('/api', home);
app.use('/api/members', members);
app.use('/api/legislation', legislation);


app.listen(3004, function() {
    console.log("Kapitol API running on port 3004");
});
