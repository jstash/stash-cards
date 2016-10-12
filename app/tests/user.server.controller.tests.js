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

    describe('GET /api/users', function() {
        it('should get user list', function(done) {
            request(app)
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect(200, done);
        });

    });

    describe('GET /api/users/:userId', function() {

    });

    describe('PUT /api/users/:userId', function() {

    });

    describe('DELETE /api/users/:userId', function() {

    });

    describe('GET /signup', function() {

    });

    describe('POST /signup', function() {

    });

    describe('GET /signin', function() {

    });

    describe('POST /signin', function() {

    });

    describe('GET /signout', function() {

    });
});