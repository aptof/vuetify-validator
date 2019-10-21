import assertString from '../utils/isString'
import * as message from '../utils/errorMessage'
import validator from '../utils/strings'

export const emailFactory = (errorMessage = message.emailError()) => {
  return (value) => {
    return validator.isEmail(value) || errorMessage
  }
}

export const minLengthFactory = (length, errorMessage = message.minLengthError(length)) => {
  return (value) => {
    return validator.isMinLength(value, length) || errorMessage
  }
}

export const hasAnUpperFactory = (errorMessage = message.hasAnUpperError()) => {
  return (value) => {
    return validator.hasAnUpper(value) || errorMessage
  }
}

export const hasALowerFactory = (errorMessage = message.hasALowerError()) => {
  return (value) => {
    return validator.hasALower(value) || errorMessage
  }
}

export const hasADigitFactory = (errorMessage = message.hasADigitError()) => {
  return (value) => {
    return validator.hasADigit(value) || errorMessage
  }
}

export const isSameFactory = (match, errorMessage = message.isSameError()) => {
  return (value) => {
    return validator.isSame(value, match) || errorMessage
  }
}

export const isAlphaFactory = (errorMessage = message.isAlphaError()) => {
  return (value) => {
    return validator.isAlpha(value) || errorMessage
  }
}

export const isAlphaNumericFactory = (errorMessage = message.isAlphaNumericError()) => {
  return (value) => {
    return validator.isAlphaNumeric(value) || errorMessage
  }
}

export const isNumericFactory = (errorMessage = message.isNumericError()) => {
  return (value) => {
    return validator.isNumeric(value) || errorMessage
  }
}

export const isLengthFactory = (errorMessage = message.isLengthError()) => {
  return (value) => {
    return validator.isLength(value) || errorMessage
  }
}

export const isDecimalFactory = (errorMessage = message.isDecimalError()) => {
  return (value) => {
    return validator.isDecimal(value) || errorMessage
  }
}