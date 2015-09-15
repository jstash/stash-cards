var express = require('./config/express.js'),
    mongoose = require('./config/mongoose.js');

// Creates the http server
var db = mongoose();
var app = express(db);

app.listen(3000);

console.log('Server started');
