'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#newGame').hide()
  $('#gameBoard').hide()
  $('#countGames').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.box').one('click', gameEvents.playGame)
  $('#newGame').on('submit', gameEvents.onCreateGame)
  $('#gameBoard').on('submit', gameEvents.onNewGame)
  $('#newGame').on('click', gameEvents.onCreateGame)
  $('#countGames').on('click', gameEvents.onGetGames)
})
