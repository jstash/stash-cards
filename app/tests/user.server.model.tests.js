var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var user, user2;

describe('User Model Unit Tests:', function() {

    beforeEach(function (done) {
        user = new User({
            name: '012345',
            email: 'test@test.com',
            password: 'Passw0rd'
        });
        done();
    });

    describe('Testing the save method', function () {

        it('Should be able to save without problems', function(done) {
            user.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('Should not be able to save without name', function() {
            user2 = new User({
                email: user.email,
                password: user.password
            });
            user2.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when name is less than 6 characters.', function(done) {
            user.name = '01234';
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when name is more than 24 characters.', function(done) {
            user.name = '0123456789012345678901234';
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should be able to save multiple users with different name', function(done) {
            user2 = new User({
                name: '543210',
                email: 'test@test.com',
                password: 'Passw0rd'
            });

            user.save(function(err) {
                user2.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        it('Should not be able to save multiple users with the same name', function(done) {
           user2 = new User({
               name: '012345',
               email: 'test2@test.com',
               password: 'Passw0rd'
           });

            user.save(function(err) {
                user2.save(function(err2) {
                    should.exist(err2);
                    done();
                });
            });
        });

        it('Should not be able to save when email address is incorrect format.', function(done) {
            user.email = "john@domain";
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when email address already exists.', function(done) {
            user2 = new User({
                name: 'newuser',
                email: 'test@test.com',
                password: 'Passw0rd'
            });

            user.save(function(err) {
                user2.save(function(err2) {
                    should.exist(err2);
                    done();
                });
            });
        });


        it('Should not be able to save when password is under 8 characters.', function(done) {
            user.password = "Passw0r";
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when password is over 128 characters.', function(done) {
            user.password = "Passw0rd-012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when password lacks an uppercase letter.', function(done) {
            user.password = "passw0rd";
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when password lacks a lowercase letter.', function(done) {
            user.password = "PASSW0RD";
            user.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('Should not be able to save when password lacks a number.', function(done) {
            user.password = "Password";
            user.save(function(err) {
                should.exist(err);
                done();
                    });
        });
    });

    describe('Testing authentication', function () {

        it('Should authenticate successfully when password is 128 characters', function(done) {
            var pass = 'Passw0rd012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
            user.password=pass;
            user.save(function(err) {

                user.authenticate(pass).should.be.true;
                done();
            });
        });

        it('Should not authenticate successfully for incorrect password', function(done) {
            var pass = 'Passw0rd';
            user.password=pass;
            user.save(function(err) {

                user.authenticate('passw0rd').should.be.false;
                done();
            });
        });
    });


    afterEach(function (done) {

        user.remove(function () {
            if(user2) {
                user2.remove(function () {
                    user2 = null;
                    done();
                });
            } else {
                done();
            }
        });
    });
});