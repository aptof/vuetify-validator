import {
  lengthFactory,
  stringFactory
} from '../validators/strings'
import {
  vv
} from '../validators/validator'

describe('Strings.js', () => {
  var instance = vv()
  var msg = 'Custom error message'
  beforeEach(() => {
    instance = vv()
  })

  it('lengthFactory is a function and returns a fuction', () => {
    expect(lengthFactory).toBeFunction()
    expect(lengthFactory()).toBeFunction()
  })

  //I do not like idea to test same functionality twice. I will assert it against item of chain
  describe('vv().length() add the The returned fuction of the length factory in chain, then', () => {
    it('The function returns true if value has exact same length', () => {
      instance.length(5)
      expect(instance.chain[0]('sfive')).toBeTrue()
    })

    it('The function throws exception if value is not string', () => {
      instance.length(5)
      expect(() => instance.chain[0](123456)).toThrow('Invalid argument')
    })

    it('The function returns "Need to be exactly .. character(s)" if length does not match', () => {
      instance.length(5)
      expect(instance.chain[0]('Good')).toBe('Need to be exactly 5 character(s)')
    })

    it('The function should return custom error message if error message is provided in the factory arg', () => {
      instance.length(5, msg)
      expect(instance.chain[0]('Good')).toBe(msg)
    })
  })

  it('stringFactory is a function and returns a function', () => {
    expect(stringFactory).toBeFunction()
    expect(stringFactory()).toBeFunction()
  })

  describe('vv().string() add the returned function of stringFactory to the chain, then', () => {
    it('The function returns true if value is a string', () => {
      instance.string()
      expect(instance.chain[0]('Any string')).toBeTrue()
    })

    it('The function returns "Invalid input" if value is not string', () => {
      instance.string()
      expect(instance.chain[0](154)).toBe('Invalid input')
    })

    it('The function should return custom error if value not string and custom error provided', () => {
      instance.string(msg)
      expect(instance.chain[0](154)).toBe(msg)
    })
  })
})