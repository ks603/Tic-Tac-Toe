'use strict'

const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const playGame = function (event) {
  event.preventDefault()
  $(event.target).text(store.store.currentPlayer)
}

const onNewGame = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
const onGameBoard = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onGameBoardSuccess)
    .catch(ui.onGameBoardFailure)
}
module.exports = {
  playGame,
  onNewGame,
  onGameBoard
}
