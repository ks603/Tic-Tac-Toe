'use strict'

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.enail + ' succesfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpfailure = function (response) {
  $('message').text('Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpfailure
}
