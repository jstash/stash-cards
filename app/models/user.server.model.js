'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto');

var UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'Name is a required field',
        unique: true,
        minlength: 6,
        maxlength: 24
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Email address is invalid format'],
        required: true,
        unique: true
    },
    password: {
        type: String,
        validate: [
            function(pwd) {
                var validPass = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,128}$/);
                return validPass.test(pwd);
            },
            'Password must contain 8 to 128 characters and contain an '+
            'uppercase letter, a lowercase letter, and a number.'
        ],
        required: 'A password is required.'
    },
    salt: {
        type: String
    }
});

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.pre('save', function(next) {
    if(this.password) {
        this.salt = new Buffer(crypto.randomBytes(16)).toString('base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

mongoose.model('User', UserSchema);