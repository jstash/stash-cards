'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeckSchema = new mongoose.Schema({

    name: {
        type: String,
        index: true,
        required: true
    },
    description: String,
    cards: [{type: Schema.ObjectId, ref: 'Card'}]
});

mongoose.model('Deck', DeckSchema);

// Stores an indeterminate amount of sides in 'sides'.