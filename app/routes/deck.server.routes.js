'use strict';

var decks = require('../../app/controllers/decks.server.controller');

module.exports = function(app) {

    app.route('/api/decks')
        .post(decks.createDeck)
        .get(decks.readDeckList);

    app.route('/api/decks/:deckId')
        .get(decks.readDeck)
        .put(decks.updateDeck)
        .delete(decks.deleteDeck);
};