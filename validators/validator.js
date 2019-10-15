import {length} from './strings'

class validator {
  constructor(){
    this.error = ''
    this.chain = []
  }
  
  hasError() {
    if(this.error){
      return true
    } else return false
  }

  get(){
    return value => {
      if(!this.chain.length){
        return true
      }
    }
  }
}

export default () => new validator()