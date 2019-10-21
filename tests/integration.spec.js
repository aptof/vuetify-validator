import { vv } from '../index'
import * as message from '../utils/errorMessage'

describe('Integration: The library', () => {
  it('should return true for valid email', () => {
    let validator = vv().email().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })

  it('should return true for blank in email', () => {
    let validator = vv().email().get()
    expect(validator('       ')).toBeTrue()
  })

  it('should return true required.email', () => {
    let validator = vv().required().email().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })

  it('should return true email.required', () => {
    let validator = vv().email().required().get()
    expect(validator('tusha@gmail.com')).toBeTrue()
  })

  it('should return errorMessage required.email for value "   "', () => {
    let validator = vv().required().email().get()
    expect(validator('     ')).toBe(message.requiredError())
  })

  it('should return errorMessage email.required for value "     "', () => {
    let validator = vv().email().required().get()
    expect(validator('    ')).toBe(message.requiredError())
  })

  it('should return email error for invalid email on email.required', () => {
    let validator = vv().email().required().get()
    expect(validator('notaemail')).toBe(message.emailError())
  })
})