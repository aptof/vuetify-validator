import {
  length,
  str
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
    this.chain.push(str(errorMessage))
    return this
  }

  length() {
    this.chain.push('')
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