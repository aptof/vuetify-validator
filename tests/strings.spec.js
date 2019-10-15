import { length, str } from '../validators/strings'

describe('Strings.js', () => {
  it('length is a function', () => {
    expect(length).toBeFunction()
  })

  it('length(value, length) returns true if value has exact same lenght', () => {
    expect(length('any', 3)).toBe(true)
  })

  it('length throws exception if value is not string', () => {
    expect(() => length(4845, 4)).toThrow('Invalid argument')
  })

  it('length() returns "Need to be exactly .. character(s)" if length does not match', () => {
    expect(length('123456', 5)).toBe('Need to be exactly 5 character(s)')
  })

  it('length() should return custom error message if error message is provided in third arg', () => {
    let msg = 'Custom error message'
    expect(length('123456', 5, msg)).toBe(msg)
  })

  it('string is a function', () => {
    expect(str).toBeFunction()
  })

  it('str returns true if value is a string', () => {
    expect(str('Any string')).toBeTrue()
  })

  it('str returns "Invalid input" if value is not string', ()=>{
    expect(str(154)).toBe('Invalid input')
  })

  it('str should return custom error if value not string and custom error provided', () => {
    expect(str(154, 'Custom error message')).toBe('Custom error message')
  })
})