'use strict';

var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {

    app.route('/api/users')
        .post(users.createUser)
        .get(users.readUserList);

    app.route('/api/users/:userId')
        .get(users.readUser)
        .put(users.updateUser)
        .delete(users.deleteUser);


    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        })
    );

    app.get('/signout', users.signout);
};