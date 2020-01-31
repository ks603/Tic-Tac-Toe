const onNewGameSuccess = function (response) {
  $('#newGame').show()
}
const onGameBoardSuccess = function (response) {
  $('#gameBoard').show()
}

module.export = {
  onNewGameSuccess,
  onGameBoardSuccess
}
