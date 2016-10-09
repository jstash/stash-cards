'use strict';

var User = require('mongoose').model('User'),
    passport = require('passport');

exports.createUser = function(req, res, next) {
  console.log('in createUser');
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

exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('signin', {
            title: 'Sign in here',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};

exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign up today',
            messages: {}
        });
    } else {
    return res.redirect('/');
} };

exports.signup = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
                res.render('signup', {
                    title: 'Sign up today',
                    messages: err
                });
            }
            else {
                req.login(user, function(err) {
                    if (err) {
                        return next(err);
                    } else {
                        return res.redirect('/');
                    }
                });
            }
        });
    } else {
        return res.redirect('/');
    }
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.requiresLogin = function(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'Please log in'
        });
    }
    next();
};
