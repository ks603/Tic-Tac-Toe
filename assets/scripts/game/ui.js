const store = require('./../store')

const onCreateGamesuccess = response => {
  $('#message').text(store.user.email + ' successfully started game')
  $('#newGame').show()
  $('#gameBoard').show()
}

const onCreateGameFailure = response => {
  $('#message').text(store.user.email + ' something went wrong')
}

const onUpdateGameSuccess = response => {
  $('#message').text(store.user.email + ' game updated')
  // console.log(store)
}

const onUpdateGameFailure = response => {
  $('#message').text(store.user.email + ' something went wrong')
}

const onGetGamesSuccess = response => {
  $('#message').text(store.user.email + ' success')
}

const onGetGamesFailure = response => {
  $('#message').text(store.user.email + ' failed')
}

module.exports = {
  onCreateGamesuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
