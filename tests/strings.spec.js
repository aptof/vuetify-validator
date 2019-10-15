import {
  lengthFactory,
  stringFactory,
  digitFactory
} from '../validators/strings'


describe('Strings.js', () => {
  var msg = 'Custom error message'

  it('lengthFactory is a function and returns a fuction', () => {
    expect(lengthFactory).toBeFunction()
    expect(lengthFactory()).toBeFunction()
  })

  describe('The function returned by lengthFactory', () => {
    it('returns true if value has exact same length', () => {
      expect(lengthFactory(5)('sfive')).toBeTrue()
    })

    it('throws exception if value is not string', () => {
      expect(() => lengthFactory(5)(123456)).toThrow('Invalid argument')
    })

    it('returns "Need to be exactly .. character(s)" if length does not match', () => {
      expect(lengthFactory(5)('Good')).toBe('Need to be exactly 5 character(s)')
    })

    it('should return custom error message if error message is provided in the factory arg', () => {
      expect(lengthFactory(5, msg)('Good')).toBe(msg)
    })

    it('should ignore front and trailing spaces while comparing length', () => {
      expect(lengthFactory(5)('    Goods    ')).toBeTrue()
    })
  })

  it('stringFactory is a function and returns a function', () => {
    expect(stringFactory).toBeFunction()
    expect(stringFactory()).toBeFunction()
  })

  describe('The function returned by stringFactory', () => {
    it('returns true if value is a string', () => {
      expect(stringFactory()('Any string')).toBeTrue()
    })

    it('returns "Invalid input" if value is not string', () => {
      expect(stringFactory()(154)).toBe('Invalid input')
    })

    it('should return custom error if value not string and custom error provided', () => {
      expect(stringFactory(msg)(154)).toBe(msg)
    })
  })

  it('digitFactory is a function', () => {
    expect(digitFactory).toBeFunction()
  })

  it('digitFactory() returns a function', () => {
    expect(digitFactory()).toBeFunction()
  })

  describe('The function returned by digitFactory()', () => {
    it('Returns true if value contains only digits', () => {
      expect(digitFactory()('123456')).toBeTrue()
    })

    it('Returns "Accepts digits only" if value contains other than digit', () => {
      expect(digitFactory()('12345A$')).toBe('Accepts digits only.')
    })
  })
})