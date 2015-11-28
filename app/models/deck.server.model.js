'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new mongoose.Schema({

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

var DeckSchema = new mongoose.Schema({

    title: String,
    description: String,
    public: Boolean,
    cards: [Card]
});

mongoose.model('Deck', DeckSchema);