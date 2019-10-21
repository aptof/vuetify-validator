import * as stringFactories from './factories/stringFactories'
import {requiredFactory} from './factories/required'
class validator {
  constructor() {
    this.chain = []
  }

  get() {
    return value => {
      if (!this.chain.length) {
        return true
      } else {
        return validationTester(value, this.chain)
      }
    }
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
    this.chain.push(requiredFactory(errorMessage))
    return this
  }

  /**
   * Check the value if entered is an email.
   * @param {string} errorMessage - Custom error message
   */
  email(errorMessage){
    this.chain.push(stringFactories.emailFactory(errorMessage))
    return this
  }
  /**
   * Check the value if entered has a minimum length
   * @param {number} length - Minimum length
   * @param {string} errorMessage - Custom error message
   */
  minLength(length, errorMessage){
    this.chain.push(stringFactories.minLengthFactory(length, errorMessage))
    return this
  }

  /**
   * Check the value if entered contains atleast one uppercase
   * @param {stirng} errorMessage - Custom error message
   */
  containsUpper(errorMessage) {
    this.chain.push(stringFactories.hasAnUpperFactory(errorMessage))
    return this
  }

  /**
   * Check the value if entered contains atleast one lowercase
   * @param {stirng} errorMessage - Custom error message
   */
  containsLower(errorMessage) {
    this.chain.push(stringFactories.hasALowerFactory(errorMessage))
    return this
  }
  
  /**
   * Check the value if entered contains atleast one digit
   * @param {stirng} errorMessage - Custom error message
   */
  containsDigit(errorMessage) {
    this.chain.push(stringFactories.hasADigitFactory(errorMessage))
    return this
  }
}

const validationTester = (value, chain) => {
  let error = true
  for (let i = 0; i < chain.length; i++) {
    error = chain[i](value)
    if (error !== true) {
      break
    }
  }
  return error
}

export const vv = () => new validator()