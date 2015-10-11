'use strict';

var mongoose = require('mongoose');

var DeckSchema = new mongoose.Schema({

    name: {
        type: String,
        index: true
    },
    description: String,
    cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]
});

mongoose.model('Deck', DeckSchema);

// Stores an indeterminate amount of sides in 'sides'.