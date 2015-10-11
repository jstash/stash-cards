'use strict';

var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({

    name: String,
    description: String,
    sides: {
        type: Object,
        required: true
    }
});

mongoose.model('Card', CardSchema);

// Stores an indeterminate amount of sides in 'sides'.