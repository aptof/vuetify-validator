import 'jest-extended'

it('sanity', () => {
  expect(true).toBeTrue()
})

/*it('decimal() should reurn the invoking vv', () => {
  let instance = vv()
  expect(instance.decimal()).toBe(instance)
})

it('decimal() should call isDecimalFactory with the arguments', () => {
  vv().decimal(msg)
  expect(isDecimalFactory).toHaveBeenCalledWith(msg)
})

it('decimal() should add the function returned by the isDecimalFactory to chain', () => {
  let spy = jest.fn()
  isDecimalFactory.mockReturnValue(spy)
  expect(vv().decimal().chain[0]).toBe(spy)
})*/