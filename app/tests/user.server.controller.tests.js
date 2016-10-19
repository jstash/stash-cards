var app = require('../../server'),
    should = require('should'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var user1, user2, user3;

describe('User Controller Unit Tests:', function() {

    var user;
    beforeEach(function (done) {
        user = new User({
            name: '012345',
            email: 'test@test.com',
            password: 'Passw0rd'
        });
        user.save(function(err) {
            should.not.exist(err);
            done();
        });
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
         it('should get a valid user', function(done) {
            request(app)
                .get('/api/users/012345')
                .set('Accept', 'application/json')
                .expect(200, done);
        });
        it('should return 404 status for a user that does not exist', function(done) {
            request(app)
                .get('/api/users/doesnotexist')
                .set('Accept', 'application/json')
                .expect(404, done);
        });   
    });

    describe('PUT /api/users', function() {

        var existingUser = {
            name: '012345',
            email: 'test@test.com',
            password: 'NewPassw0rd'
        };
       var nonexistentUser = {
            name: 'fakeuser',
            email: 'test2@test.com',
            password: 'NewPassw0rd'
        };
        var malformedUser = {
            email: 'test2@test.com',
            password: 'NewPassw0rd'
        };

        it('should return status 200 for a valid user that was updated', function(done) {
            request(app)
                .put('/api/users')
                .send(existingUser)
                .set('Accept', 'application/json')
                .expect(200, done);
        });
        it('should produce 404 for a user that does not exist but the body is well formed', function(done) {
            request(app)
                .put('/api/users')
                .send(nonexistentUser)
                .set('Accept', 'application/json')
                .expect(400, done);
        });
        it('should produce 400 for a malformed user', function(done) {
            request(app)
                .put('/api/users')
                .send(malformedUser)
                .set('Accept', 'application/json')
                .expect(400, done);
        });
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

    afterEach(function (done) {
        user.remove(function () {
            done();
        });
    });

});