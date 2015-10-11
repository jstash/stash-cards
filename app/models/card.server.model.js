'use strict';

var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({

    name: {
        type: String,
        index: true
    },
    description: String,
    sides: Object
});

mongoose.model('Card', CardSchema);

// Stores an indeterminate amount of sides in 'sides'.