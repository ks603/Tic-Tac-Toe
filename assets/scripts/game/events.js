'use strict'
const api = require('./api')
const ui = require('./ui')

const onGetGames = function () {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}
const onCreateGame = function (data) {
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'X'

$('.box').on('click', function (event) {
  const index = $(event.target).attr('id')
  api.updateGame(index, currentPlayer)
    .then(() => {
      const cellText = $(event.target).text()
      if (cellText !== '') {
        return
      }
      $(event.target).text(currentPlayer)
      currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
      $('#message').text(currentPlayer + ' its your turn!')

      if ($('#0').html() === 'X' && $('#1').html() === 'X' && $('#2').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#3').html() === 'X' && $('#4').html() === 'X' && $('#5').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#6').html() === 'X' && $('#7').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#0').html() === 'X' && $('#3').html() === 'X' && $('#6').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#1').html() === 'X' && $('#4').html() === 'X' && $('#7').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#2').html() === 'X' && $('#5').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#0').html() === 'X' && $('#4').html() === 'X' && $('#8').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      } else if ($('#2').html() === 'X' && $('#4').html() === 'X' && $('#6').html() === 'X') {
        $('#message').text('Player X won')
        $('#gameBoard').hide()
      }
      if ($('#0').html() === 'O' && $('#1').html() === 'O' && $('#2').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#3').html() === 'O' && $('#4').html() === 'O' && $('#5').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#6').html() === 'O' && $('#7').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#0').html() === 'O' && $('#3').html() === 'O' && $('#6').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#1').html() === 'O' && $('#4').html() === 'O' && $('#7').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#2').html() === 'O' && $('#5').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#0').html() === 'O' && $('#4').html() === 'O' && $('#8').html() === 'O') {
        $('#message').text('Player O won')
        $('#gameBoard').hide()
      } else if ($('#2').html() === 'O' && $('#4').html() === 'O' && $('#6').html() === 'O') {
        $('#message').text('player O won!')
        $('#gameBoard').hide()
      } else {
        let count = 0
        for (let i = 0; i < 9; i++) {
          if ($('#' + i).html() !== '') {
            count++
          }
        } if (count === 9) {
          $('#message').text('its a tie!')
        }
      }
    })
    .catch(ui.onUpdateGameFailure)
})

module.exports = {
  onGetGames,
  onCreateGame
}
