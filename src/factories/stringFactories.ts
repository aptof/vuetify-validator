import assertString from '../utils/isString';
import * as message from '../utils/errorMessage';
import validator from '../utils/strings';
import 'jest-extended'

export const emailFactory = (errorMessage = message.emailError()) => {
  return (value:any) => {
    return validator.isEmail(value) || errorMessage;
  };
};

export const minLengthFactory = (length:number, errorMessage = message.minLengthError(length)) => {
  return (value:any) => {
    return validator.isMinLength(value, length) || errorMessage;
  };
};

export const hasAnUpperFactory = (errorMessage = message.hasAnUpperError()) => {
  return (value:any) => {
    return validator.hasAnUpper(value) || errorMessage;
  };
};

export const hasALowerFactory = (errorMessage = message.hasALowerError()) => {
  return (value:any) => {
    return validator.hasALower(value) || errorMessage;
  };
};

export const hasADigitFactory = (errorMessage = message.hasADigitError()) => {
  return (value:any) => {
    return validator.hasADigit(value) || errorMessage;
  };
};

export const isSameFactory = (match:any, errorMessage = message.isSameError()) => {
  return (value:any) => {
    return validator.isSame(value, match) || errorMessage;
  };
};

export const isAlphaFactory = (errorMessage = message.isAlphaError()) => {
  return (value:any) => {
    return validator.isAlpha(value) || errorMessage;
  };
};

export const isAlphaNumericFactory = (errorMessage = message.isAlphaNumericError()) => {
  return (value:any) => {
    return validator.isAlphaNumeric(value) || errorMessage;
  };
};

export const isNumericFactory = (errorMessage = message.isNumericError()) => {
  return (value:any) => {
    return validator.isNumeric(value) || errorMessage;
  };
};

export const isLengthFactory = (length:number, errorMessage = message.isLengthError(length)) => {
  return (value:any) => {
    return validator.isLength(value, length) || errorMessage;
  };
};

export const isDecimalFactory = (errorMessage = message.isDecimalError()) => {
  return (value:any) => {
    return validator.isDecimal(value) || errorMessage;
  };
};
