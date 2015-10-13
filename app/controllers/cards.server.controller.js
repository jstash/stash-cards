'use strict';

var Card = require('mongoose').model('Card');

exports.createCard = function(req, res, next) {
    var user = new Card(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(card);
        }
    });
};

exports.readCard = function (req, res, next) {
    Card.findOne({_id: id }, function(err, card) {
        if(err) {
            return next(err);
        } else {
            req.card = card;
            next();
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
    Card.findByIdAndUpdate(req.card.id, req.body, function(err, card) {
        if(err) {
            return next(err);
        } else {
            res.json(card);
        }
    });
};

exports.deleteCard = function(req, res, next) {
    Card.remove({ _id: req.body.id }, function(err) {
        if (err) {
            return next(err);
        }
        else {
            next();
        }
    });
};