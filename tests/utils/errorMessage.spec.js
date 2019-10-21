import * as message from '../../src/utils/errorMessage'

describe('utils/errorMessage.js', () => {
  it('eamilError', () => {
    expect(message.emailError()).toBe('Invalid email')
  })

  it('requiredError', () => {
    expect(message.requiredError()).toBe('Required')
  })

  it('minLengthError', () => {
    expect(message.minLengthError(5)).toBe('Minimum length should be 5')
  })

  it('hasAnUpperError', () => {
    expect(message.hasAnUpperError()).toBe('Should have an uppercase')
  })

  it('hasALowerError', () => {
    expect(message.hasALowerError()).toBe('Should have a lowercase')
  })

  it('hasADigitError', () => {
    expect(message.hasADigitError()).toBe('Should have a digit')
  })

  it('isSameError', () => {
    expect(message.isSameError()).toBe('Does not match')
  })

  it('isAlphaError', () => {
    expect(message.isAlphaError()).toBe('Should be alphabets')
  })

  it('isAlphaNumericError', () => {
    expect(message.isAlphaNumericError()).toBe('Should be alpha-numeric')
  })

  it('isNumericError', () => {
    expect(message.isNumericError()).toBe('Should be numeric')
  })

  it('isLengthError', () => {
    expect(message.isLengthError(8)).toBe('Length should be 8')
  })

  it('isDecimalError', () => {
    expect(message.isDecimalError()).toBe('Should be decimal')
  })
})