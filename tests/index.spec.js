jest.mock('../factories/stringFactories', () => ({
  __esModule: true,
  emailFactory: jest.fn(),
  minLengthFactory: jest.fn(),
  hasAnUpperFactory: jest.fn(),
  hasALowerFactory: jest.fn(),
  hasADigitFactory: jest.fn(),
  isSameFactory: jest.fn()
}))

jest.mock('../factories/required', () => ({
  __esModule: true,
  requiredFactory: jest.fn()
}))

import {
  vv
} from '../index'

import {
  requiredFactory
} from '../factories/required'
import {
  emailFactory,
  minLengthFactory,
  hasAnUpperFactory,
  hasALowerFactory,
  hasADigitFactory,
  isSameFactory,
} from '../factories/stringFactories'

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

  it('required() should add the returned method of requiredFactory to the chain', () => {
    let spy = jest.fn()
    requiredFactory.mockReturnValue(spy)
    expect(vv().required('any').chain[0]).toBe(spy)
  })

  it('email is a function', () => {
    expect(vv().email).toBeFunction()
  })

  it('email() should reurn the invoking vv', () => {
    let instance = vv()
    expect(instance.email()).toBe(instance)
  })

  it('email() should call emailFactory with the arguments', () => {
    vv().email(msg)
    expect(emailFactory).toHaveBeenCalledWith(msg)
  })

  it('email() should add the function returned by the emailFactory to chain', () => {
    let spy = jest.fn()
    emailFactory.mockReturnValue(spy)
    expect(vv().email().chain[0]).toBe(spy)
  })

  it('minLength() should reurn the invoking vv', () => {
    let instance = vv()
    expect(instance.minLength()).toBe(instance)
  })

  it('minLength() should call minLengthFactory with the arguments', () => {
    vv().minLength(5, msg)
    expect(minLengthFactory).toHaveBeenCalledWith(5, msg)
  })

  it('minLength() should add the function returned by the minLengthFactory to chain', () => {
    let spy = jest.fn()
    minLengthFactory.mockReturnValue(spy)
    expect(vv().minLength().chain[0]).toBe(spy)
  })

  it('containsUpper() should reurn the invoking vv', () => {
    let instance = vv()
    expect(instance.containsUpper()).toBe(instance)
  })

  it('containsUpper() should call hasAnUpperFactory with the arguments', () => {
    vv().containsUpper(msg)
    expect(hasAnUpperFactory).toHaveBeenCalledWith(msg)
  })

  it('containsUpper() should add the function returned by the hasAnUpperFactory to chain', () => {
    let spy = jest.fn()
    hasAnUpperFactory.mockReturnValue(spy)
    expect(vv().containsUpper().chain[0]).toBe(spy)
  })

  it('containsLower() should reurn the invoking vv', () => {
    let instance = vv()
    expect(instance.containsLower()).toBe(instance)
  })
  
  it('containsLower() should call hasALowerFactory with the arguments', () => {
    vv().containsLower(msg)
    expect(hasALowerFactory).toHaveBeenCalledWith(msg)
  })
  
  it('containsLower() should add the function returned by the hasALowerFactory to chain', () => {
    let spy = jest.fn()
    hasALowerFactory.mockReturnValue(spy)
    expect(vv().containsLower().chain[0]).toBe(spy)
  })

  it('containsDigit() should reurn the invoking vv', () => {
    let instance = vv()
    expect(instance.containsDigit()).toBe(instance)
  })
  
  it('containsDigit() should call hasADigitFactory with the arguments', () => {
    vv().containsDigit(msg)
    expect(hasADigitFactory).toHaveBeenCalledWith(msg)
  })
  
  it('containsDigit() should add the function returned by the hasADigitFactory to chain', () => {
    let spy = jest.fn()
    hasADigitFactory.mockReturnValue(spy)
    expect(vv().containsDigit().chain[0]).toBe(spy)
  })
})