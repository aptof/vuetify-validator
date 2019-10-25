import { requiredFactory } from './factories/required';
import * as stringFactories from './factories/stringFactories';
import strings from './utils/strings';

class VuetifyValidator {
  public chain: any[];

  constructor() {
    this.chain = [];
  }

  public get() {
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
  public required(errorMessage: string) {
    this.chain.push(requiredFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered is an email.
   * @param {string} errorMessage - Custom error message
   */
  public email(errorMessage: string) {
    this.chain.push(stringFactories.emailFactory(errorMessage));
    return this;
  }
  /**
   * Check the value if entered has a minimum length
   * @param {number} length - Minimum length
   * @param {string} errorMessage - Custom error message
   */
  public minLength(length: number, errorMessage: string) {
    this.chain.push(stringFactories.minLengthFactory(length, errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one uppercase
   * @param {stirng} errorMessage - Custom error message
   */
  public containsUpper(errorMessage: string) {
    this.chain.push(stringFactories.hasAnUpperFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one lowercase
   * @param {stirng} errorMessage - Custom error message
   */
  public containsLower(errorMessage: string) {
    this.chain.push(stringFactories.hasALowerFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains atleast one digit
   * @param {stirng} errorMessage - Custom error message
   */
  public containsDigit(errorMessage: string) {
    this.chain.push(stringFactories.hasADigitFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only alphabets
   * @param {stirng} errorMessage - Custom error message
   */
  public alphabatesOnly(errorMessage: string) {
    this.chain.push(stringFactories.isAlphaFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only alphabets and digits
   * @param {stirng} errorMessage - Custom error message
   */
  public alphaNumericOnly(errorMessage: string) {
    this.chain.push(stringFactories.isAlphaNumericFactory(errorMessage));
    return this;
  }

  /**
   * Check the value if entered contains only digits
   * @param {stirng} errorMessage - Custom error message
   */
  public digitsOnly(errorMessage: string) {
    this.chain.push(stringFactories.isNumericFactory(errorMessage));
    return this;
  }

  public length(length: number, errorMessage: string) {
    this.chain.push(stringFactories.isLengthFactory(length, errorMessage));
    return this;
  }

  public decimal(errorMessage: string) {
    this.chain.push(stringFactories.isDecimalFactory(errorMessage));
    return this;
  }
}

const validationTester = (value: any, chain: any[]) => {
  let error = true;
  for (const validator of chain) {
    error = validator(value);
    if (error !== true) {
      break;
    }
  }
  return error;
};

export const vv = (): VuetifyValidator => new VuetifyValidator();
export const confirm = strings.isSame;
