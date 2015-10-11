'use strict';

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {

    app.route('/api/users')
        .post(users.createUser)
        .get(users.readUserList);

    app.route('/api/users/:userId')
        .get(users.readUser)
        .put(users.updateUser)
        .delete(users.deleteUser);
};