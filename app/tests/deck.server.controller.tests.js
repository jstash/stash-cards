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

    describe('GET /api/decks', function() {

    });

    describe('GET /api/decks/:deckId', function() {

    });

    describe('POST /api/decks/:deckId', function() {

    });

    describe('PUT /api/decks/:deckId', function() {

    });

    describe('DELETE /api/decks/:deckId', function() {

    });

    afterEach(function (done) {
        done();
    });
});
