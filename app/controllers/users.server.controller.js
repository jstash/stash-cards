'use strict';

var User = require('mongoose').model('User'),
    passport = require('passport');

exports.readUser = function (req, res, next) {
    User.findOne({name: req.params.userId }, function(err, user) {
        if(err) {
            console.log('error in readUser');
            return next(err);
        } else {
            if(user) {
                res.json(user);
            } else {
                return res.status(404).send({
                    message: 'User does not exist'
                });
            }
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
    User.findOneAndUpdate({name: req.body.name}, req.body, {passRawResult: true}, function(err, doc, raw) {
        if(!raw.lastErrorObject.updatedExisting) {
            res.status(400).end();
        } else {
            res.status(200).end();
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
            err: {}
        });
    } else {
    return res.redirect('/');
} };

exports.signup = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        user.provider = 'local';

        if(req.body.password != req.body.password_verification) {
            res.render('signup', {
                    title: 'Sign up today',
                    err: {password_verification: "Passwords do not match"}
            });
        }
        else {
            user.save(function(err) {
                if (err) {
                    var errState = { }
                    var signupState = {
                        title: 'Sign up today',
                        err: errState
                    };
                    if(err.errors) {
                        for (var field in err.errors) {
                            errState[field] = err.errors[field].message;
                        }
                    }
                    res.render('signup', signupState);
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
        }
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
