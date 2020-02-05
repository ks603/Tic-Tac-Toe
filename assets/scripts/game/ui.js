const store = require('./../store')

const onCreateGameSuccess = function (data) {
  store.game = data.game
  $('#gameBoard').show()
  $('#message').text('Created game successfully!')
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

const onGetGamesSuccess = response => {
  $('#message').text(store.user.email + ' success')
}

const onGetGamesFailure = response => {
  $('#message').text(store.user.email + ' failed')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
