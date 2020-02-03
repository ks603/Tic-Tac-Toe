const store = require('./../store')

const onCreateGamesuccess = response => {
  $('#message').text(response.user.email + ' succesfully signed up')
  $('#newGame').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onCreateGameFailure = response => {
  $('#message').text(response.user.email + ' something went wrong')
  $('message').text('Failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
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
