var app = require('../../server'),
    should = require('should'),
    mongoose = require('mongoose'),
    Deck = mongoose.model('Deck');

var deck, deck2;
var card, card2, card3;

describe('Deck Model Unit Tests:', function() {

    beforeEach(function (done) {
        deck = new Deck({
            title: 'My Test Deck',
            description: 'A deck created for unit tests.',
            public: false,
            cards: [
                {
                    front: 'front of my card',
                    back: 'Back of my card',
                    reviewCount: 0,
                    correctCount: 0
                },
                {
                    front: 'front 2',
                    back: 'back 2',
                    reviewCount: 0,
                    correctCount: 0
                }
            ]
        });

        done();

    });

    describe('Testing the save method', function () {

        it('Should be able to save without problems', function (done) {
            deck.save(function (err) {
                should.not.exist(err);
                done();
            });
        });
    });

    afterEach(function (done) {


        if(deck) {
            deck.remove(function(err) {
                if(err) {
                    console.log(err);
                }
            });
        }
        done();
    });
});