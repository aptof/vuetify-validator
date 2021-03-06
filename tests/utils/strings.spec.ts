import validator from '../../src/utils/strings'
import 'jest-extended'

describe('utils/strings.js', () => {
  it.each([
    ['email'],
    ['email@email'],
    ['email@email.']
  ])('isEmail return false for %p', (value) => {
    expect(validator.isEmail(value)).toBeFalse()
  })

  it.each([
    ['email@email.com'],
    [''],
    ['   '],
    [undefined],
    [null]
  ])('isEmail return true for %p', (value) => {
    expect(validator.isEmail(value)).toBeTrue()
  })

  it.each([
    ['abcdefgh', 8, true],
    ['abcde', 5, true],
    ['abcdefghij', 6, true],
    [' abcdefgh ', 5, true],
    ['abc efgh', 8, true],
    ['abcdefg', 8, false],
    [' abcdefg ', 8, false],
    [undefined, 6, true],
    ['', 5, true],
    ['        ', 8, true],
    [null, 8, true]
  ])('isMinlength: while value %p, length %p returns %p', (value, length, expected) => {
    expect(validator.isMinLength(value, length)).toBe(expected)
  })

  it.each([
    ['abcde'],
    ['fjiejf'],
    ['7891']
  ])('hasAnUpper returns false when %p', (value) => {
    expect(validator.hasAnUpper(value)).toBeFalse()
  })

  it.each([
    ['abcdE'],
    ['fAieJf'],
    ['78aFg91'],
    [undefined],
    [null],
    ['    '],
    ['']
  ])('hasAnUpper returns true when %p', (value) => {
    expect(validator.hasAnUpper(value)).toBeTrue()
  })

  it.each([
    ['ABCDEF'],
    ['FGHI'],
    ['7891']
  ])('hasALower returns false when %p', (value) => {
    expect(validator.hasALower(value)).toBeFalse()
  })

  it.each([
    ['CDEFdE'],
    ['fAieJf'],
    ['78aFg91'],
    [undefined],
    [null],
    ['    '],
    ['']
  ])('hasALower returns true when %p', (value) => {
    expect(validator.hasALower(value)).toBeTrue()
  })

  it.each([
    ['ABCDEF'],
    ['FGHI'],
    ['abDfEf']
  ])('hasADigit returns false when %p', (value) => {
    expect(validator.hasADigit(value)).toBeFalse()
  })

  it.each([
    ['aabd8fe'],
    ['f5Ai9eJf'],
    ['7891'],
    [undefined],
    [null],
    ['    '],
    ['']
  ])('hasADigit returns true when %p', (value) => {
    expect(validator.hasADigit(value)).toBeTrue()
  })

  it.each([
    [true, 'abcde', 'abcde'],
    [true, ' abcd ', 'abcd'],
    [true, 'ade', ' ade '],
    [false, 'ab de', 'abde'],
    [true, undefined, undefined],
    [true, null, null],
    [true, '  ', ''],
    [true, '', '   '],
    [true, '   ', '   '],
    [true, '', ''],
    [false, null, 'abde'],
    [false, 'abcde', null],
    [false, undefined, 'abde'],
    [false, 'abcde', undefined],
    [false, '  ', 'abde'],
    [false, 'abcde', '  '],
    [false, '', 'abde'],
    [false, 'abcde', ''],
  ])('isSame returns %p if value %p have to match with %p', (expected, value, match) => {
    expect(validator.isSame(value, match)).toBe(expected)
  })

  it.each([
    [true, 'abcdFEs'],
    [true, '     '],
    [true, ''],
    [true, undefined],
    [true, null],
    [false, 'afie45Def'],
    [false, '123456'],
    [false, 'afe$']
  ])('isAlpha returs %p if value is %p', (expected, value) => {
    expect(validator.isAlpha(value)).toBe(expected)
  })

  it.each([
    [true, 'abcdFEs'],
    [true, '     '],
    [true, ''],
    [true, undefined],
    [true, null],
    [true, 'afie45Def'],
    [true, '123456'],
    [true, 'AB5'],
    [false, 'Ab8$']
  ])('isAlphaNumeric returs %p if value is %p', (expected, value) => {
    expect(validator.isAlphaNumeric(value)).toBe(expected)
  })

  it.each([
    [false, 'abcdFEs'],
    [true, '     '],
    [true, ''],
    [true, undefined],
    [true, null],
    [false, 'afie45Def'],
    [true, '123456'],
    [false, 'AB5'],
    [false, 'Ab8$']
  ])('isNumeric returs %p if value is %p', (expected, value) => {
    expect(validator.isNumeric(value)).toBe(expected)
  })

  it.each([
    ['abcdefgh', 8, true],
    [' abcde ', 5, true],
    ['abc', 6, false],
    [' fgh ', 5, false],
    ['abc efgh', 8, true],
    ['abcdefg', 2, false],
    [' abcdefg ', 8, false],
    [undefined, 6, true],
    ['', 5, true],
    ['        ', 8, true],
    [null, 8, true]
  ])('isLength: while value %p, length %p returns %p', (value, length, expected) => {
    expect(validator.isLength(value, length)).toBe(expected)
  })

  it.each([
    [false, 'abcdFEs'],
    [true, '     '],
    [true, ''],
    [true, undefined],
    [true, null],
    [false, 'afie45Def'],
    [true, '123456'],
    [false, 'AB5'],
    [false, 'Ab8$'],
    [true, '-123.45']
  ])('isDecimal returs %p if value is %p', (expected, value) => {
    expect(validator.isDecimal(value)).toBe(expected)
  })
})