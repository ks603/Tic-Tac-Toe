const store = require('./../store')

const onNewGameSuccess = function (response) {
  $('#message').text(store.user.email + ' successfully started game')
  $('#newGame').show()
  $('#gameBoard').show()
}
const onGameBoardSuccess = function (response) {
  $('#gameBoard').show()
  $('#gameBoard').show()
}

module.export = {
  onNewGameSuccess,
  onGameBoardSuccess
}
