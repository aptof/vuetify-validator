import * as stringFactories from './factories/stringFactories';
import { requiredFactory } from './factories/required';
import strings from './utils/strings';

class VuetifyValidator {
  chain: Array<any>

  constructor() {
    this.chain = [];
  }

  get() {
    return (value: any) => {
      if (!this.chain.length) {
        return true;
      } else {
        return validationTester(value, this.chain);
      }
    };
  }
  
  /**
   * Check if value is entered
   * @param {string} errorMessage - Custom error message
   */
  required(errorMessage: string) {
    this.chain.push(requiredFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered is an email.
   * @param {string} errorMessage - Custom error message
   */
  email(errorMessage: string) {
    this.chain.push(stringFactories.emailFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered has a minimum length
   * @param {number} length - Minimum length
   * @param {string} errorMessage - Custom error message
   */
  minLength(length: number, errorMessage: string) {
    this.chain.push(stringFactories.minLengthFactory(length, errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one uppercase
   * @param {stirng} errorMessage - Custom error message
   */
  containsUpper(errorMessage: string) {
    this.chain.push(stringFactories.hasAnUpperFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one lowercase
   * @param {stirng} errorMessage - Custom error message
   */
  containsLower(errorMessage: string) {
    this.chain.push(stringFactories.hasALowerFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one digit
   * @param {stirng} errorMessage - Custom error message
   */
  containsDigit(errorMessage: string) {
    this.chain.push(stringFactories.hasADigitFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only alphabets
   * @param {stirng} errorMessage - Custom error message
   */
  alphabatesOnly(errorMessage: string) {
    this.chain.push(stringFactories.isAlphaFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only alphabets and digits
   * @param {stirng} errorMessage - Custom error message
   */
  alphaNumericOnly(errorMessage: string) {
    this.chain.push(stringFactories.isAlphaNumericFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only digits
   * @param {stirng} errorMessage - Custom error message
   */
  digitsOnly(errorMessage: string) {
    this.chain.push(stringFactories.isNumericFactory(errorMessage));
    return this;
  }

  length(length: number, errorMessage: string) {
    this.chain.push(stringFactories.isLengthFactory(length, errorMessage));
    return this;
  }

  decimal(errorMessage: string) {
    this.chain.push(stringFactories.isDecimalFactory(errorMessage));
    return this;
  }
}

const validationTester = (value: any, chain: Array<any>) => {
  let error = true;
  for (let i = 0; i < chain.length; i++) {
    error = chain[i](value);
    if (error !== true) {
      break;
    }
  }
  return error;
};

export const vv = (): VuetifyValidator => new VuetifyValidator();
export const confirm = strings.isSame;