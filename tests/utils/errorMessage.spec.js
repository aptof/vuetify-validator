import * as message from '../../utils/errorMessage'

describe('utils/errorMessage.js', () => {
  it('eamilError is ...', () => {
    expect(message.emailError()).toBe('Invalid email')
  })

  it('requiredError is ...', () => {
    expect(message.requiredError()).toBe('Required')
  })

  it('minLengthError is ...', () => {
    expect(message.minLengthError(5)).toBe('Minimum length should be 5')
  })

  it('hasAnUpperError', () => {
    expect(message.hasAnUpperError()).toBe('Should have an uppercrease')
  })
})