'use strict'
const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const playGame = function (event) {
  $(event.target).text(store.store.currentPlayer)
  store.store.currentPlayer = store.store.currentPlayer === 'O' ? store.store.currentPlayer = 'X' : store.store.currentPlayer = 'O'
}

const onCreateGame = () => {
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = event => {
  api.updateGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGetGames = event => {
  api.getgame()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}
module.exports = {
  playGame,
  onCreateGame,
  onGetGames,
  onUpdateGame
}
