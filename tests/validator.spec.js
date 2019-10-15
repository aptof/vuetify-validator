import v from '../validators/validator'

describe('V', () => {
  it('hasEroror reutrns false on initialize', () => {
    expect(v().hasError()).toBe(false)
  })

  it('hasError return true if error is set', () => {
    let instance = v()
    instance.error = 'A error'
    expect(instance.hasError()).toBe(true)
  })

  it('chain is an empty array', () => {
    expect(v().chain).toBeArray().toBeEmpty()
  })

  it('get is a function', () => {
    expect(v().get).toBeFunction()
  })

  it('get() should return function', () => {
    expect(v().get()).toBeFunction()
  })

  it('r by get() return true if chain is empty', () => {
    let validator = v().get()
    expect(validator('any')).toBeTrue()
  })
})