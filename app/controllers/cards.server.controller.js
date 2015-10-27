'use strict';

var Card = require('mongoose').model('Card');

exports.createCard = function(req, res, next) {
    var card = new Card(req.body);

    card.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(card);
        }
    });
};

exports.readCard = function (req, res, next) {

    Card.findOne({_id: req.params.cardId }, function(err, card) {
        if(err) {
            return next(err);
        } else {
            res.json(card);
        }
    });
};

exports.readCardList = function(req, res, next) {
    Card.find({}, function(err, cards) {
        if(err) {
            return next(err);
        } else {
            res.json(cards);
        }
    });
};

exports.updateCard = function(req, res, next) {
    Card.findByIdAndUpdate(req.params.cardId, req.body, function(err, card) {
        if(err) {
            return next(err);
        } else {
            res.json(card);
        }
    });
};

exports.deleteCard = function(req, res, next) {
    Card.remove({ _id: req.params.cardId }, function(err) {
        if (err) {
            return next(err);
        }
        else {
            next();
        }
    });
};