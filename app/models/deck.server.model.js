'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CardSchema = require('./card.server.model.js')


var DeckSchema = new Schema({
    title: String,
    description: String,
    public: Boolean,
    cards: [CardSchema]
});

mongoose.model('Deck', DeckSchema);