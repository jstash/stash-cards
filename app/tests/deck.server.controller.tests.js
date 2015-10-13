var app = require('../../server'),
    should = require('should'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    Deck = mongoose.model('Deck');

var deck1, deck2, deck3;

describe('Deck Controller Unit Tests:', function() {

    beforeEach(function (done) {

        done();
    });

    describe('Testing the GET requests', function () {

        it('Should save with only a name', function(done) {
            should.exist(null);
            done();

        });
    });

    describe('Testing the POST request', function () {

        it('Should save with only a name', function(done) {
            should.exist(null);
            done();


        });
    });

    describe('Testing the PUT request', function () {

        it('Should save with only a name', function(done) {
            should.exist(null);
            done();


        });
    });

    describe('Testing the DELETE request', function () {

        it('Should save with only a name', function(done) {
            should.exist(null);
            done();

        });
    });

    afterEach(function (done) {


        done();
    });
});