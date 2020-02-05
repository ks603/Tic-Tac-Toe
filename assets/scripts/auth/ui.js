'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' succesfully signed up')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onSignUpfailure = function (response) {
  $('message').text('Failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#newGame').show()
}

const onSignInFailure = function (response) {
  $('#message').text('sign in failed')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign Out failed')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign Out Succeeded')
  $('#message').text('Sign Out Succeeded')
  $('#change-password').hide()
  $('#gameBoard').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#newGame').hide()
  store.user = null
}

module.exports = {
  onSignUpSuccess,
  onSignUpfailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess
}
