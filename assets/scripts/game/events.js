'use strict'
// const getformFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
const onUpdateGame = function (event) {
  // console.log('In onUpdateGame')
  // use event (the parameter that comes in)
  // it will come in with `event` data telling that the gameBoard was clicked
  // and if you do event.target on that, it will tell you which box was clicked
  // get that information put into a variable
  // then what you need to do is format a JSON object to get ready to send for
  // your AJAX request. it will look like this when it's in the AJAX request
  //   {
  //   "game": {
  //     "cell": {
  //       "index": 0,
  //       "value": "x"
  //     },
  //     "over": false
  //   }
  // }
  // so you need to replace '0', 'x', and 'false' with the proper data every time
  // using variables and store the whole JSON object in preformattedAJAXRequest
  event.preventDefault()
  api.updateGame(preformattedAJAXRequest)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

let currentPlayer = 'X'

$('.box').one('click', function (event) {
  $(event.target).text(currentPlayer)
  currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'

  if ($('#tile1').html() === 'X' && $('#tile2').html() === 'X' && $('#tile3').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile4').html() === 'X' && $('#tile5').html() === 'X' && $('#tile6').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile7').html() === 'X' && $('#tile8').html() === 'X' && $('#tile').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile1').html() === 'X' && $('#tile4').html() === 'X' && $('#tile7').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile2').html() === 'X' && $('#tile5').html() === 'X' && $('#tile8').html() === 'X') {
    $('#message').text('CPlayer X won')
    $('.box').off('click')
  } else if ($('#tile3').html() === 'X' && $('#tile6').html() === 'X' && $('#tile').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile1').html() === 'X' && $('#tile5').html() === 'X' && $('#tile').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  } else if ($('#tile3').html() === 'X' && $('#tile5').html() === 'X' && $('#tile7').html() === 'X') {
    $('#message').text('Player X won')
    $('.box').off('click')
  }
  if ($('#tile1').html() === 'O' && $('#tile2').html() === 'O' && $('#tile3').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile4').html() === 'O' && $('#tile5').html() === 'O' && $('#tile6').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile7').html() === 'O' && $('#tile8').html() === 'O' && $('#tile').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile1').html() === 'O' && $('#tile4').html() === 'O' && $('#tile7').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile2').html() === 'O' && $('#tile5').html() === 'O' && $('#tile8').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile3').html() === 'O' && $('#tile6').html() === 'O' && $('#tile').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile1').html() === 'O' && $('#tile5').html() === 'O' && $('#tile').html() === 'O') {
    $('#message').text('Player O won')
    $('.box').off('click')
  } else if ($('#tile3').html() === 'O' && $('#tile5').html() === 'O' && $('#tile7').html() === 'O') {
    $('#message').text('player O won!')
    $('.box').off('click')
  }
})

module.exports = {
  onGetGames,
  onCreateGame,
  onUpdateGame
}
