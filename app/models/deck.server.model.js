'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    front: String,
    back: String,
    reviewCount: Number,
    correctCount: Number,
    lastReviewed: Date
});

CardSchema.method.equals = function equals(card) {
    return  card.front === this.front &&
        card.back === this.back &&
        card.reviewCount === this.reviewCount &&
        card.correctCount === this.correctCount &&
        card.lastReviewed === this.lastReviewed;
};

var DeckSchema = new Schema({
    title: String,
    description: String,
    public: Boolean,
    cards: [CardSchema]
});

mongoose.model('Deck', DeckSchema);