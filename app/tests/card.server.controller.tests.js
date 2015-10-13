var app = require('../../server'),
    should = require('should'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    Card = mongoose.model('Card');

var card1, card2, card3;

describe('Card Controller Unit Tests:', function() {

    beforeEach(function (done) {

        card1 = new Card({
            name: 'Dog in spanish',
            description: 'Card for learning some basic Spanish',
            sides: { front: "Dog", back: "perro" }
        });

        card2 = new Card({
            name: 'Dog in spanish',
            description: 'Card for learning some basic Spanish',
            sides: { front: "Little Dog", back: "perrito" }
        });

        card3 = new Card({
            name: 'Cat in spanish',
            sides: { front: "Dog", back: "gato" }
        });

        card1.save(function() {
            card2.save(function() {
                card3.save(function() {
                    done();
                });
            });
        });
    });

    describe('Testing the GET requests', function () {

        it('Should be able to get the full list of cards', function(done) {
            request(app).get('/api/cards').set('Accept', 'application/json').
                expect('Content-Type', /json/).expect(200).end(function(err, res) {
                    res.body.should.be.an.Array.and.have.lengthOf(3);
                    res.body[0].should.have.property('name', card1.name);
                    res.body[0].should.have.property('description', card1.description);
                    res.body[0].should.have.property('sides', card1.sides);
                    done();
                });
        });
    });

    describe('Testing the POST request', function () {

        it('Should be able to find a specific card by id.', function(done) {
            request(app).get('/api/cards/' + card1.id).set('Accept', 'application/json').
                expect('Content-Type', /json/).expect(200).end(function(err, res) {
                    res.body.should.be.an.Object;
                    res.body.should.have.property('name', card1.name);
                    res.body.should.have.property('description', card1.description);
                    res.body.should.have.property('sides', card1.sides);
                    done();
                });
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
        card1.delete(function() {
            card2.delete(function() {
                card3.delete(function() {
                    done();
                });
            });
        });
    });
});