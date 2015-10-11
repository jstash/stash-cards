'use strict';

var cards = require('../../app/controllers/cards.server.controller');

module.exports = function(app) {

    app.route('/api/cards')
        .post(cards.createCard)
        .get(cards.readCardList);

    app.route('/api/cards/:cardId')
        .get(cards.readCard)
        .put(cards.updateCard)
        .delete(cards.deleteCard);
};