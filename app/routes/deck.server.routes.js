'use strict';

var decks = require('../../app/controllers/decks.server.controller');

module.exports = function(app) {

    app.route('/api/decks/:deckId')
    // Read a whole deck
        .get(decks.readDeck)
    // Updates  deck
        .put(decks.updateDeck)
    // Deletes a deck
        .delete(decks.deleteDeck)
    // Create a new deck
        .post(decks.createDeck);
    app.route('/api/decks/')
    // Read the full list of decks
        .get(decks.readDeckList);
}