"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = exports.vv = void 0;

var stringFactories = _interopRequireWildcard(require("./factories/stringFactories"));

var _required = require("./factories/required");

var _strings = _interopRequireDefault(require("./utils/strings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class validator {
  constructor() {
    this.chain = [];
  }

  get() {
    return value => {
      if (!this.chain.length) {
        return true;
      } else {
        return validationTester(value, this.chain);
      }
    };
  }
  /*string(errorMessage) {
    this.chain.push(stringFactory(errorMessage))
    return this
  }
    length(length, errorMessage) {
    this.chain.push(lengthFactory(length, errorMessage))
    return this
  }*/

  /**
   * Check if value is entered
   * @param {string} errorMessage - Custom error message
   */


  required(errorMessage) {
    this.chain.push((0, _required.requiredFactory)(errorMessage));
    return this;
  }
  /**
   * Check the value if entered is an email.
   * @param {string} errorMessage - Custom error message
   */


  email(errorMessage) {
    this.chain.push(stringFactories.emailFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered has a minimum length
   * @param {number} length - Minimum length
   * @param {string} errorMessage - Custom error message
   */


  minLength(length, errorMessage) {
    this.chain.push(stringFactories.minLengthFactory(length, errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains atleast one uppercase
   * @param {stirng} errorMessage - Custom error message
   */


  containsUpper(errorMessage) {
    this.chain.push(stringFactories.hasAnUpperFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains atleast one lowercase
   * @param {stirng} errorMessage - Custom error message
   */


  containsLower(errorMessage) {
    this.chain.push(stringFactories.hasALowerFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains atleast one digit
   * @param {stirng} errorMessage - Custom error message
   */


  containsDigit(errorMessage) {
    this.chain.push(stringFactories.hasADigitFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains only alphabets
   * @param {stirng} errorMessage - Custom error message
   */


  alphabatesOnly(errorMessage) {
    this.chain.push(stringFactories.isAlphaFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains only alphabets and digits
   * @param {stirng} errorMessage - Custom error message
   */


  alphaNumericOnly(errorMessage) {
    this.chain.push(stringFactories.isAlphaNumericFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered contains only digits
   * @param {stirng} errorMessage - Custom error message
   */


  digitsOnly(errorMessage) {
    this.chain.push(stringFactories.isNumericFactory(errorMessage));
    return this;
  }

  length(length, errorMessage) {
    this.chain.push(stringFactories.isLengthFactory(length, errorMessage));
    return this;
  }

  decimal(errorMessage) {
    this.chain.push(stringFactories.isDecimalFactory(errorMessage));
    return this;
  }

}

const validationTester = (value, chain) => {
  let error = true;

  for (let i = 0; i < chain.length; i++) {
    error = chain[i](value);

    if (error !== true) {
      break;
    }
  }

  return error;
};

const vv = () => new validator();

exports.vv = vv;
const confirm = _strings.default.isSame;
exports.confirm = confirm;