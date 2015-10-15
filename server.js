'use strict';

var express = require('./config/express.js'),
    mongoose = require('./config/mongoose.js');

// Creates the http server
var db = mongoose();
var app = express(db);


app.listen(3000);

module.exports = app; // Allows test runner to run tests on APIs
console.log('Server started on port 3000');
