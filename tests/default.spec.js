import * as defalt from '../utils/default'

describe('default.js', () => {
  it('eamilError is ...', () => {
    expect(defalt.emailError).toBe('Invalid email')
  })

  it('requiredError is ...', () => {
    expect(defalt.requiredError).toBe('Required')
  })
})