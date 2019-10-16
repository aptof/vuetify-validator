import assertString from '../utils/assertString'

describe('assertString.js', () => {
  it.each([
    ['4'],
    ['54'],
    ['Any'],
    ['    '],
    ['']
  ])('Returns true if arg is %p', (value) => {
    expect(assertString(value)).toBeTrue()
  })

  it.each([
    [12],
    [10],
    [20],
    [undefined],
    [null],
    [{any:'any'}]
  ])('Returns false if arg is %p', (value) => {
    expect(assertString(value)).toBeFalse()
  })
})