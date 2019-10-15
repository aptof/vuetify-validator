import validator from 'validator';
import assertString from './assertString'
import * as defaul from './default'

export const emailFactory = (errorMessage = defaul.emailError) => {
  return (value) => {
    if (value == undefined || value == null) {
      return true
    }
    if (assertString(value)) {
      if (value.trim().length == 0 || validator.isEmail(value)) {
        return true
      }
    }
    return errorMessage
  }
}