import {isEmail} from '../../utils/strings'

describe('utils/strings.js', () => {
  it.each([['email'], ['email@email'], ['email@email.']])('isEmail return false for %p', (value) => {
    expect(isEmail(value)).toBeFalse()
  })

  it.each([['email@email.com'], [''], ['   '], [undefined], [null]])('isEmail return true for %p', (value) => {
    expect(isEmail(value)).toBeTrue()
  })
})