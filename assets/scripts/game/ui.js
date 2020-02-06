const store = require('./../store')

const onCreateGameSuccess = function (data) {
  store.game = data.game
  $('#gameBoard').show()
  $('#message').text('Created game successfully!')
  $('.box').text('')
}

const onCreateGameFailure = function (data) {
  store.game = data.game
  $('#message').text('Created game failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  $('#message').text('Updated game successfully!')
}

const onUpdateGameFailure = function (responseData) {
  store.game = responseData.game
  $('#message').text('Update game failed')
}

const onGetGameSuccess = function (data) {
  $('#message').text('You have played ' + data.games.length + ' games!')
}

const onGetGamesFailure = response => {
  $('#message').text(store.user.email + ' failed')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGamesFailure
}
