'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
}
console.log(data)

api.signUp(data)
  .then(ui.onSignupSuccess)
  .catch(ui.onSignUpFailure)

module.exports = {
  onSignUp
}