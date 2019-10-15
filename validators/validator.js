import {
  lengthFactory,
  stringFactory
} from './strings'

class validator {
  constructor() {
    this.error = ''
    this.chain = []
  }

  hasError() {
    if (this.error) {
      return true
    } else return false
  }

  string(errorMessage) {
    this.chain.push(stringFactory(errorMessage))
    return this
  }

  length(length, errorMessage) {
    this.chain.push(lengthFactory(length, errorMessage))
  }

  get() {
    return value => {
      if (!this.chain.length) {
        return true
      } else {
        return this.chain[0](value)
      }
    }
  }
}

export const vv = () => new validator()