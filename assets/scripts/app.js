'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#newGame').hide()
  $('#gameBoard').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.box').one('click', gameEvents.playGame)
  $('#newGame').on('submit', gameEvents.onCreateGame)
  $('#gameBoard').on('submit', gameEvents.onNewGame)
  $('#newGame').on('click', gameEvents.onCreateGame)
  $('#getGames').on('click', gameEvents.getGames)
})
