import assertString from '../utils/assertString'
import * as message from '../utils/errorMessage'
import validator from '../utils/strings'

export const emailFactory = (errorMessage = message.emailError) => {
  return (value) => {
    return validator.isEmail(value) || errorMessage
  }
}