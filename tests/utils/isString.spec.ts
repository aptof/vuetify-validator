import isString from '../../src/utils/isString';
import 'jest-extended'

describe('isString.js', () => {
  it.each([
    ['4'],
    ['54'],
    ['Any'],
    ['    '],
    ['']
  ])('Returns true if arg is %p', (value) => {
    expect(isString(value)).toBeTrue()
  })

  it.each([
    [12],
    [10],
    [20],
    [undefined],
    [null],
    [{
      any: 'any'
    }]
  ])('Returns false if arg is %p', (value:any) => {
    expect(isString(value)).toBeFalse()
  })
})