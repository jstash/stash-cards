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

        it('Should be able to save a new deck', function (done) {
            deck.save(function (err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should be able to add a card to a deck', function (done) {
            
            deck.cards.should.have.length(2);

            var card  = {
                front: 'front 2',
                back: 'back 2',
                reviewCount: 0,
                correctCount: 0
            };
            deck.save(function (err) {
                should.not.exist(err);
            });
            deck.cards.push(card);
            deck.save(function (err) {
                should.not.exist(err);
            });
            deck.cards.should.have.length(3);
            done();
        });

        it('Should be able to remove a card from a deck', function (done) {

            deck.save(function (err) {
                should.not.exist(err);
                deck = Deck.findOne(function(err, mydeck) {
                    should.not.exist(err);
                    should(mydeck.cards).have.length(2);

                    mydeck.cards.splice(1,1);
                    mydeck.save(function (err) {
                        should.not.exist(err);
                    });
                    mydeck.cards.should.have.length(1);
                    done();
                });          
            });  


        });
    });

    describe('Testing the delete method', function() {
        it('Should be able to delete a deck', function (done) {
            deck.save(function (err) {
                should.not.exist(err);
                Deck.findOne(function(err, myDeck) {
                    should.not.exist(err);
                    myDeck.remove(function(err) {
                        should.not.exist(err);
                        Deck.count(function (err, c) {
                            should(c).be.equal(0);
                            done();
                        });
                    });
                });
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
