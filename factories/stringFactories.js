import validator from 'validator';
import assertString from '../utils/assertString'
import * as defaul from '../utils/errorMessage'

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