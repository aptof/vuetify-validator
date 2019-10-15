import * as factories from './utils/strings'
import {requiredFactory} from './utils/required'
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

  required(errorMessage) {
    this.chain.push(requiredFactory(errorMessage))
    return this
  }

  email(){
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