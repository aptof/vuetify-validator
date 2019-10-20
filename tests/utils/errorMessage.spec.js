import * as defalt from '../../utils/errorMessage'

describe('utils/errorMessage.js', () => {
  it('eamilError is ...', () => {
    expect(defalt.emailError).toBe('Invalid email')
  })

  it('requiredError is ...', () => {
    expect(defalt.requiredError).toBe('Required')
  })
})