var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    Card = mongoose.model('Card');

var card, card2;

describe('Card Model Unit Tests:', function() {

    beforeEach(function (done) {
        card = new Card({
            name: 'Dog in spanish',
            description: 'Card for learning some basic Spanish',
            sides: { front: "Dog", back: "perro" }
        });
        done();
    });

    describe('Testing the save method', function () {

        it('Should save without problems', function(done) {
            card.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should save without a name', function(done) {
            card2 = new Card({
                description: card.description,
                sides: card.sides
            })
            card2.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should save without a description', function(done) {
            card2 = new Card({
                name: card.name,
                sides: card.sides
            });
            card2.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should not save without sides', function(done) {

            card2 = new Card({
                name: card.name,
                description: card.description,
            });

            card2.save(function(err) {
                should.exist(err);
                done();
            });
        });

    });

    afterEach(function (done) {

        card.remove(function () {
            if(card2) {
                card2.remove(function () {
                    card2 = null;
                    done();
                });
            } else {
                done();
            }
        });
    });
});