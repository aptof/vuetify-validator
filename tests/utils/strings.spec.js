import validator from '../../utils/strings'

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
    //[' abcdefg ', 8, false],
    [undefined, 6, true],
    ['', 5, true],
    ['        ', 8, true],
    [null, 8, true]
  ])('isMinlen: while value %p, length %p returns %p', (value, length, expected) => {
    expect(validator.isMinLen(value, length)).toBe(expected)
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
  ])('isSame returns %p if value %p to match with %p', (expected, value, match) => {
    expect(validator.isSame(value, match)).toBe(expected)
  })
})