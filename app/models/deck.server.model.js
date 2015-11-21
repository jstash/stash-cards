'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Card = new mongoose.Schema({

    front: String,
    back: String,
    reviewCount: Number,
    correctCount: Number,
    lastReviewed: Date
});

var Deck = new mongoose.Schema({

    owner: [{type: Schema.ObjectId, ref: 'User'}],
    title: String,
    description: String,
    public: Boolean,
    cards: [Card]
});

mongoose.model('Deck', Deck);