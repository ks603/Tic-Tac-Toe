'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')

const currentPlayer = 'X'

const playGame = function (event) {
  event.preventDefault()
  $(event.target).text(currentPlayer)
}

module.exports = {
  playGame
}
