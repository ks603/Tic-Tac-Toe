'use strict'
// const getformFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetGames = function () {
  // console.log('In onGetGames')
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

const onCreateGame = function (data) {
  event.preventDefault()
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'X'

$('.box').one('click', function (event) {
  const index = $(event.target).attr('id')
  api.updateGame(index, currentPlayer)
    .then(() => {
      $(event.target).text(currentPlayer)
      currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'

      if ($('#0').html() === 'X' && $('#1').html() === 'X' && $('#2').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#3').html() === 'X' && $('#4').html() === 'X' && $('#5').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#6').html() === 'X' && $('#7').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#0').html() === 'X' && $('#3').html() === 'X' && $('#6').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#1').html() === 'X' && $('#4').html() === 'X' && $('#7').html() === 'X') {
        $('#message').text('CPlayer X won')
        $('.box').off('click')
      } else if ($('#2').html() === 'X' && $('#5').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#0').html() === 'X' && $('#4').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      } else if ($('#2').html() === 'X' && $('#4').html() === 'X' && $('#6').html() === 'X') {
        $('#message').text('Player X won')
        $('.box').off('click')
      }
      if ($('#0').html() === 'O' && $('#1').html() === 'O' && $('#2').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#3').html() === 'O' && $('#4').html() === 'O' && $('#5').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#6').html() === 'O' && $('#7').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#0').html() === 'O' && $('#3').html() === 'O' && $('#6').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#1').html() === 'O' && $('#4').html() === 'O' && $('#7').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#2').html() === 'O' && $('#5').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#0').html() === 'O' && $('#4').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('.box').off('click')
      } else if ($('#2').html() === 'O' && $('#4').html() === 'O' && $('#6').html() === 'O') {
        $('#message').text('player O won!')
        $('.box').off('click')
      }
    })
    .catch(ui.onUpdateGameFailure)
})

module.exports = {
  onGetGames,
  onCreateGame
}
