"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDecimalFactory = exports.isLengthFactory = exports.isNumericFactory = exports.isAlphaNumericFactory = exports.isAlphaFactory = exports.isSameFactory = exports.hasADigitFactory = exports.hasALowerFactory = exports.hasAnUpperFactory = exports.minLengthFactory = exports.emailFactory = void 0;

var _isString = _interopRequireDefault(require("../utils/isString"));

var message = _interopRequireWildcard(require("../utils/errorMessage"));

var _strings = _interopRequireDefault(require("../utils/strings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emailFactory = (errorMessage = message.emailError()) => {
  return value => {
    return _strings.default.isEmail(value) || errorMessage;
  };
};

exports.emailFactory = emailFactory;

const minLengthFactory = (length, errorMessage = message.minLengthError(length)) => {
  return value => {
    return _strings.default.isMinLength(value, length) || errorMessage;
  };
};

exports.minLengthFactory = minLengthFactory;

const hasAnUpperFactory = (errorMessage = message.hasAnUpperError()) => {
  return value => {
    return _strings.default.hasAnUpper(value) || errorMessage;
  };
};

exports.hasAnUpperFactory = hasAnUpperFactory;

const hasALowerFactory = (errorMessage = message.hasALowerError()) => {
  return value => {
    return _strings.default.hasALower(value) || errorMessage;
  };
};

exports.hasALowerFactory = hasALowerFactory;

const hasADigitFactory = (errorMessage = message.hasADigitError()) => {
  return value => {
    return _strings.default.hasADigit(value) || errorMessage;
  };
};

exports.hasADigitFactory = hasADigitFactory;

const isSameFactory = (match, errorMessage = message.isSameError()) => {
  return value => {
    return _strings.default.isSame(value, match) || errorMessage;
  };
};

exports.isSameFactory = isSameFactory;

const isAlphaFactory = (errorMessage = message.isAlphaError()) => {
  return value => {
    return _strings.default.isAlpha(value) || errorMessage;
  };
};

exports.isAlphaFactory = isAlphaFactory;

const isAlphaNumericFactory = (errorMessage = message.isAlphaNumericError()) => {
  return value => {
    return _strings.default.isAlphaNumeric(value) || errorMessage;
  };
};

exports.isAlphaNumericFactory = isAlphaNumericFactory;

const isNumericFactory = (errorMessage = message.isNumericError()) => {
  return value => {
    return _strings.default.isNumeric(value) || errorMessage;
  };
};

exports.isNumericFactory = isNumericFactory;

const isLengthFactory = (errorMessage = message.isLengthError()) => {
  return value => {
    return _strings.default.isLength(value) || errorMessage;
  };
};

exports.isLengthFactory = isLengthFactory;

const isDecimalFactory = (errorMessage = message.isDecimalError()) => {
  return value => {
    return _strings.default.isDecimal(value) || errorMessage;
  };
};

exports.isDecimalFactory = isDecimalFactory;