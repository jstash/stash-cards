'use strict';

var express = require('express'),
    http = require('http'),
    methodOverride = require('method-override'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('./config'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function () {

    var app = express();
    var server = http.createServer(app);

    if(config.environment =='development') {
        app.use(morgan('dev'));
    } else if(config.environment =='production') {
        // Compress in production
        app.use(compress());
    }

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // Allows more flexibility in what can be URL encoded such as JSON-like objects.
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/deck.server.routes.js')(app);
    require('../app/routes/user.server.routes.js')(app);

    app.use(express.static('./public'));

    return server;
};
