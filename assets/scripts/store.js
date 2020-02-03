'use strict'

const store = {
  'currentPlayer': 'X',
  'gameArray': ['', '', '', '', '', '', '', '', '']
}

for (let i = 0; i < 9; i++) {
  if (i % 2 === 0) {
    store.currentPlayer = 'X'
  } else {
    store.currentPlayer = 'O'
  }
}

module.exports = {
  store
}
