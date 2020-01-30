'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' succesfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpfailure = function (response) {
  $('message').text('Failed')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
}

const onSignInFailure = function (response) {
  $('message').text('sign in failed')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpfailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
