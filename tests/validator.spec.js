jest.mock('../validators/strings', () => ({
  __esModule: true,
  stringFactory: jest.fn(),
  lengthFactory: jest.fn()
}))

jest.mock('../validators/required', () => ({
  __esModule: true,
  requiredFactory: jest.fn()
}))

import {
  vv
} from '../validators/validator'
import {
  stringFactory,
  lengthFactory,
} from '../validators/strings'

import {
  requiredFactory
} from '../validators/required'

describe('vv', () => {
  var msg = 'Custom error message'

  it('chain is an empty array', () => {
    expect(vv().chain).toBeArray().toBeEmpty()
  })

  it('get is a function', () => {
    expect(vv().get).toBeFunction()
  })

  it('get() should return a function', () => {
    expect(vv().get()).toBeFunction()
  })

  it('the validator returned by get() return true if chain is empty', () => {
    let validator = vv().get()
    expect(validator('any')).toBeTrue()
  })

  describe('the validator returned by get()', () => {
    it('should call all the functions of chain if all function returns true', () => {
      let spy1 = jest.fn().mockReturnValue(true)
      let spy2 = jest.fn().mockReturnValue(true)
      let spy3 = jest.fn().mockReturnValue(true)
      let instance = vv()
      instance.chain.push(spy1, spy2, spy3)
      let value = 'any'
      let validator = instance.get()
      validator(value)
      expect(spy1).toHaveBeenCalledWith(value)
      expect(spy2).toHaveBeenCalledWith(value)
      expect(spy3).toHaveBeenCalledWith(value)
    })

    it('should return true function returns true', () => {
      let spy1 = jest.fn().mockReturnValue(true)
      let spy2 = jest.fn().mockReturnValue(true)
      let spy3 = jest.fn().mockReturnValue(true)
      let instance = vv()
      instance.chain.push(spy1, spy2, spy3)
      let value = 'any'
      let validator = instance.get()
      expect(validator(value)).toBeTrue()
    })

    it('should not call beyond the function which returns error message', () => {
      let spy1 = jest.fn().mockReturnValue(true)
      let spy2 = jest.fn().mockReturnValue(msg)
      let spy3 = jest.fn().mockReturnValue(true)
      let instance = vv()
      instance.chain.push(spy1, spy2, spy3)
      let value = 'any'
      let validator = instance.get()
      validator(value)
      expect(spy1).toHaveBeenCalledWith(value)
      expect(spy2).toHaveBeenCalledWith(value)
      expect(spy3).not.toHaveBeenCalled()
    })

    it('should return the error message returned by the function', () => {
      let spy1 = jest.fn().mockReturnValue(true)
      let spy2 = jest.fn().mockReturnValue(msg)
      let spy3 = jest.fn().mockReturnValue(true)
      let instance = vv()
      instance.chain.push(spy1, spy2, spy3)
      let value = 'any'
      let validator = instance.get()
      expect(validator(value)).toBe(msg)
    })
  })

  it('length() is function of vv', () => {
    expect(vv().length).toBeFunction()
  })

  it('length() should return the invoking vv instance', () => {
    let instance = vv()
    expect(instance.length(5)).toBe(instance)
  })

  it('length() should call the lengthFactory with the arguments', () => {
    vv().length(10, msg)
    expect(lengthFactory).toHaveBeenCalledWith(10, msg)
  })

  it('length() should add to chain the returned function of length factory', () => {
    let spy = jest.fn()
    lengthFactory.mockReturnValue(spy)
    expect(vv().length().chain[0]).toBe(spy)
  })

  it('string is function of v', () => {
    expect(vv().string).toBeFunction()
  })

  it('string() should return invoking vv instance', () => {
    let instance = vv()
    expect(instance.string()).toBe(instance)
  })

  it('string() should call the stringFactory', () => {
    vv().string('error')
    expect(stringFactory).toHaveBeenCalledWith('error')
  })

  it('string() should add to the chain the retruned function of stringFactory', () => {
    let spy = jest.fn()
    stringFactory.mockReturnValue(spy)
    expect(vv().string().chain[0]).toBe(spy)
  })

  it('required is a function', () => {
    expect(vv().required).toBeFunction()
  })

  it('required() should return the invoking vv instance', () => {
    let instance = vv()
    expect(instance.required()).toBe(instance)
  })

  it('required() should call requiredFactory with the provided argument', () => {
    vv().required(msg)
    expect(requiredFactory).toHaveBeenCalledWith(msg)
  })

  it('required() should add the return method of requiredFactory to the chain', () => {
    let spy = jest.fn()
    requiredFactory.mockReturnValue(spy)
    expect(vv().required('any').chain[0]).toBe(spy)
  })
})