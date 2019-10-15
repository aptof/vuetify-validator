import { vv } from '../index'
describe('e2e.js: The library', () => {
  it('should return true for valid email', () => {
    let validator = vv().email().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })

  it('should return true required.email', () => {
    let validator = vv().required().email().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })

  it('should return true email.required', () => {
    let validator = vv().email().required().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })
})