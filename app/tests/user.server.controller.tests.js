var app = require('../../server'),
    should = require('should'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var user1, user2, user3;

describe('User Controller Unit Tests:', function() {

    beforeEach(function (done) {

        done();
    });

    // @TODO: When user validation is in place will add tests for the user controller.

    afterEach(function (done) {


        done();
    });
});