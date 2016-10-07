'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

// Avoids warning regarding deprected mpromise library.
 mongoose.Promise = global.Promise;

module.exports = function() {

    var db = mongoose.connect(config.db);

    require('../app/models/deck.server.model');
    require('../app/models/user.server.model');

    return db;
}