'use strict';

var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport');

// Creates the http server
var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(3000);

module.exports = app; // Allows test runner to run tests on APIs
console.log('Server started on port 3000');
