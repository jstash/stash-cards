var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var deck, deck2;

describe('Deck Model Unit Tests:', function() {

    beforeEach(function (done) {
        user = new Deck({
           // name: '012345',
           // email: 'test@test.com',
           // password: 'Passw0rd'
        });
        done();
    });

    describe('Testing the save method', function () {


    });

    afterEach(function (done) {

        user.remove(function () {
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