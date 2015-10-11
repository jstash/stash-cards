'use strict';

var Deck = require('mongoose').model('Deck');

exports.createDeck = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.readDeck = function (req, res, next) {
    User.findOne({_id: id }, function(err, user) {
        if(err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

exports.readDeckList = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.updateDeck = function(req, res, next) {
    Deck.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.deleteDeck = function(req, res, next) {
    Deck.remove({ _id: req.body.id }, function(err) {
        if (err) {
            return next(err);
        }
        else {
            next();
        }
    });
};