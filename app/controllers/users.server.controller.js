'use strict';

var User = require('mongoose').model('User');

exports.createUser = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.readUser = function (req, res, next) {
    User.findOne({_id: id }, function(err, user) {
        if(err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

exports.readUserList = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.updateUser = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.deleteUser = function(req, res, next) {
    User.remove({ _id: req.body.id }, function(err) {
        if (err) {
            return next(err);
        }
        else {
            next();
        }
    });
};