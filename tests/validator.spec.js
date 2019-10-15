import {
  vv
} from '../validators/validator'

describe('vv', () => {
  it('hasEroror reutrns false on initialize', () => {
    expect(vv().hasError()).toBe(false)
  })

  it('hasError return true if error is set', () => {
    let instance = vv()
    instance.error = 'A error'
    expect(instance.hasError()).toBe(true)
  })

  it('chain is an empty array', () => {
    expect(vv().chain).toBeArray().toBeEmpty()
  })

  it('get is a function', () => {
    expect(vv().get).toBeFunction()
  })

  it('get() should return function', () => {
    expect(vv().get()).toBeFunction()
  })

  describe('function retured by get()', () => {
    it('return true if chain is empty', () => {
      let validator = vv().get()
      expect(validator('any')).toBeTrue()
    })

    it('after chaining string the validator should return true if passed valid value', () => {
      let validator = vv().string().get()
      expect(validator('Any String')).toBeTrue()
    })

    it('on chaining string return "Invalid input" if value is not string', () => {
      let validator = vv().string().get()
      expect(validator(12345)).toBe('Invalid input')
    })

    it('on chaining string with custom message returns true if valid string', () => {
      let validator = vv().string('Custom error').get()
      expect(validator('AnyString')).toBeTrue()
    })

    it('on chaining string with custom message returns custom message if invlaid string', () => {
      let validator = vv().string('Custom error').get()
      expect(validator(123456)).toBe('Custom error')
    })
  })

  it('string is function of v', () => {
    expect(vv().string).toBeFunction()
  })

  it('string() increases the number of item in chain', () => {
    let instance = vv();
    let pre = instance.chain.length
    instance.string()
    expect(instance.chain.length).toBe(pre + 1)
  })

  it('string() should add str function to the chain', () => {
    let instance = vv()
    instance.string()
    expect(instance.chain[0]).toBeFunction()
    expect(instance.chain[0].name).toBe('str')
  })

  it('string() should return this instance', () => {
    let instance = vv()
    let newInstance = instance.string()
    expect(newInstance.chain.length).toBe(1)
  })

  it('length is function of vv', () => {
    expect(vv().length).toBeFunction()
  })

  it('length() increases the number of item in chain', () => {
    let instance = vv();
    let pre = instance.chain.length
    instance.length()
    expect(instance.chain.length).toBe(pre + 1)
  })
  /*
    it('string() should add str function to the chain', () => {
      let instance = vv()
      instance.string()
      expect(instance.chain[0]).toBeFunction()
      expect(instance.chain[0].name).toBe('str')
    })

    it('string() should return this instance', () => {
      let instance = vv()
      let newInstance = instance.string()
      expect(newInstance.chain.length).toBe(1)
    })*/
})