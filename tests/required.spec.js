import {
  requiredFactory
} from '../utils/required'
import { requiredError } from '../utils/default'

describe('requied.js', () => {
  it('requiredFactory is a function', () => {
    expect(requiredFactory).toBeFunction() 
  })

  it('requiredFactory returns a function', () => {
    expect(requiredFactory()).toBeFunction()
  })

  describe('The method returned by required factory', () => {
    it.each([
      ['any string', [0],
        [false],
        [true]
      ]
    ])('Returns true if value is %p', (value) => {
      expect(requiredFactory()(value)).toBeTrue()
    })

    it.each([
      [undefined],
      [null],
      ['     ']
    ])('Returns "Required" if value is %p', (value) => {
      expect(requiredFactory()(value)).toBe(requiredError)
    })

    it('Returns custom error message provided in factory argument', () => {
      let msg = 'Custom error message'
      expect(requiredFactory(msg)('  ')).toBe(msg)
    })
  })
})