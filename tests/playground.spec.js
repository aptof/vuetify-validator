it('sanity', () => {
  expect(true).toBeTrue()
})
/*
it('confirm() should reurn the invoking vv', () => {
  let instance = vv()
  expect(instance.confirm()).toBe(instance)
})

it('confirm() should call isSameFactory with the arguments', () => {
  vv().confirm(msg)
  expect(isSameFactory).toHaveBeenCalledWith(msg)
})

it('confirm() should add the function returned by the isSameFactory to chain', () => {
  let spy = jest.fn()
  isSameFactory.mockReturnValue(spy)
  expect(vv().confirm().chain[0]).toBe(spy)
})*/