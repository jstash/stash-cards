var app = require('../../server'),
    should = require('should'),
    mongoose = require('mongoose'),
    Deck = mongoose.model('Deck');

var deck, deck2;
var card, card2, card3;

describe('Deck Model Unit Tests:', function() {

    beforeEach(function (done) {
        deck = new Deck({
           name: 'Test deck'
        });
        done();
    });

    describe('Testing the save method', function () {

        it('Should save with only a name', function(done) {
            deck.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should not save without a name', function(done) {
            deck2 = new Deck({});
            deck2.save(function(err) {
                should.exist(err);
                done();
            });
        });
    });

    afterEach(function (done) {

        deck.remove(function () {
            if(deck2) {
                deck2.remove(function () {
                    deck2 = null;
                    done();
                });
            } else {
                done();
            }
        });
    });
});