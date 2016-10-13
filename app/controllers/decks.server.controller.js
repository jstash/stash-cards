'use strict';

var Deck = require('mongoose').model('Deck');

exports.createDeck = function(req, res, next) {
    var deck = new Deck(req.body);

    deck.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(deck);
        }
    });
};

exports.readDeck = function (req, res, next) {
    Deck.findOne({_id: req.params.deckId }, function(err, deck) {
        if(err) {
            return next(err);
        } else {
            res.json(deck);
        }
    });
};

exports.readDeckList = function(req, res, next) {
    Deck.find({}, {title: 1, description: 1, _id: 0}, function(err, decks) {
        if(err) {
            return next(err);
        } else {
            res.json(decks);
        }
    });
};

exports.updateDeck = function(req, res, next) {
    Deck.findByIdAndUpdate(req.params.deckId, req.body, function(err, deck) {
        if(err) {
            return next(err);
        } else {
            res.json(deck);
        }
    });
};

exports.deleteDeck = function(req, res, next) {
    Deck.remove({ _id: req.params.deckId }, function(err) {
        if (err) {
            return next(err);
        }
        else {
            next();
        }
    });
};