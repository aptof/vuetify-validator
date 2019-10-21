import {
  emailFactory,
  minLengthFactory,
  hasAnUpperFactory,
  hasALowerFactory,
  hasADigitFactory,
  isSameFactory,
  isAlphaFactory,
  isAlphaNumericFactory,
  isNumericFactory,
  isLengthFactory,
  isDecimalFactory
} from '../../factories/stringFactories'
import * as message from '../../utils/errorMessage'
import validator from '../../utils/strings'

describe('factories/stringFactories.js', () => {
  let msg = 'Custom error or any stirng'
  let value = 'any value'

  it('emailFactory is a funiotn and returns a function', () => {
    expect(emailFactory).toBeFunction()
    expect(emailFactory()).toBeFunction()
  })

  //Testing the return value not the functionality of validatorjs library
  describe('The function returned by emailFactory', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should call isEmail with value', () => {
      let spy = jest.spyOn(validator, 'isEmail')
      emailFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })

    it('Returns true if isEmail returns true', () => {
      jest.spyOn(validator, 'isEmail').mockImplementation(() => true)
      expect(emailFactory()()).toBeTrue()
    })

    it('Should return error message if isEmail returns false', () => {
      jest.spyOn(validator, 'isEmail').mockImplementation(() => false)
      expect(emailFactory()()).toBe(message.emailError())
      expect(emailFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by minLengthFactory', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should call isMinLength with value and length', () => {
      let spy = jest.spyOn(validator, 'isMinLength')
      minLengthFactory(5)(value)
      expect(spy).toHaveBeenCalledWith(value, 5)
    })

    it('Returns true if isMinLength returns true', () => {
      jest.spyOn(validator, 'isMinLength').mockImplementation(() => true)
      expect(minLengthFactory()()).toBeTrue()
    })

    it('Should return error message if isMinLength returns false', () => {
      jest.spyOn(validator, 'isMinLength').mockImplementation(() => false)
      expect(minLengthFactory(6)()).toBe(message.minLengthError(6))
      expect(minLengthFactory(5, msg)()).toBe(msg)
    })
  })

  describe('The function returned by hasAnUpperFactory', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should call hasAnUpper with value', () => {
      let spy = jest.spyOn(validator, 'hasAnUpper')
      hasAnUpperFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })

    it('Returns true if hasAnUpper returns true', () => {
      jest.spyOn(validator, 'hasAnUpper').mockImplementation(() => true)
      expect(hasAnUpperFactory()()).toBeTrue()
    })

    it('Should return error message if hasAnUpper returns false', () => {
      jest.spyOn(validator, 'hasAnUpper').mockImplementation(() => false)
      expect(hasAnUpperFactory()()).toBe(message.hasAnUpperError())
      expect(hasAnUpperFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by hasALowerFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call hasALower of validator with value', () => {
      let spy = jest.spyOn(validator, 'hasALower')
      hasALowerFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if hasALower returns true', () => {
      jest.spyOn(validator, 'hasALower').mockImplementation(() => true)
      expect(hasALowerFactory()()).toBeTrue()
    })
  
    it('Should return error message if hasALower returns false', () => {
      jest.spyOn(validator, 'hasALower').mockImplementation(() => false)
      expect(hasALowerFactory()()).toBe(message.hasALowerError())
      expect(hasALowerFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by hasADigitFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call hasADigit of validator with value', () => {
      let spy = jest.spyOn(validator, 'hasADigit')
      hasADigitFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if hasADigit returns true', () => {
      jest.spyOn(validator, 'hasADigit').mockImplementation(() => true)
      expect(hasADigitFactory()()).toBeTrue()
    })
  
    it('Should return error message if hasADigit returns false', () => {
      jest.spyOn(validator, 'hasADigit').mockImplementation(() => false)
      expect(hasADigitFactory()()).toBe(message.hasADigitError())
      expect(hasADigitFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isSameFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isSame of validator with value', () => {
      let spy = jest.spyOn(validator, 'isSame')
      isSameFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isSame returns true', () => {
      jest.spyOn(validator, 'isSame').mockImplementation(() => true)
      expect(isSameFactory()()).toBeTrue()
    })
  
    it('Should return error message if isSame returns false', () => {
      jest.spyOn(validator, 'isSame').mockImplementation(() => false)
      expect(isSameFactory()()).toBe(message.isSameError())
      expect(isSameFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isAlphaFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isAlpha of validator with value', () => {
      let spy = jest.spyOn(validator, 'isAlpha')
      isAlphaFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isAlpha returns true', () => {
      jest.spyOn(validator, 'isAlpha').mockImplementation(() => true)
      expect(isAlphaFactory()()).toBeTrue()
    })
  
    it('Should return error message if isAlpha returns false', () => {
      jest.spyOn(validator, 'isAlpha').mockImplementation(() => false)
      expect(isAlphaFactory()()).toBe(message.isAlphaError())
      expect(isAlphaFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isAlphaNumericFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isAlphaNumeric of validator with value', () => {
      let spy = jest.spyOn(validator, 'isAlphaNumeric')
      isAlphaNumericFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isAlphaNumeric returns true', () => {
      jest.spyOn(validator, 'isAlphaNumeric').mockImplementation(() => true)
      expect(isAlphaNumericFactory()()).toBeTrue()
    })
  
    it('Should return error message if isAlphaNumeric returns false', () => {
      jest.spyOn(validator, 'isAlphaNumeric').mockImplementation(() => false)
      expect(isAlphaNumericFactory()()).toBe(message.isAlphaNumericError())
      expect(isAlphaNumericFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isNumericFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isNumeric of validator with value', () => {
      let spy = jest.spyOn(validator, 'isNumeric')
      isNumericFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isNumeric returns true', () => {
      jest.spyOn(validator, 'isNumeric').mockImplementation(() => true)
      expect(isNumericFactory()()).toBeTrue()
    })
  
    it('Should return error message if isNumeric returns false', () => {
      jest.spyOn(validator, 'isNumeric').mockImplementation(() => false)
      expect(isNumericFactory()()).toBe(message.isNumericError())
      expect(isNumericFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isLengthFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isLength of validator with value', () => {
      let spy = jest.spyOn(validator, 'isLength')
      isLengthFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isLength returns true', () => {
      jest.spyOn(validator, 'isLength').mockImplementation(() => true)
      expect(isLengthFactory()()).toBeTrue()
    })
  
    it('Should return error message if isLength returns false', () => {
      jest.spyOn(validator, 'isLength').mockImplementation(() => false)
      expect(isLengthFactory()()).toBe(message.isLengthError())
      expect(isLengthFactory(msg)()).toBe(msg)
    })
  })

  describe('The function returned by isDecimalFactory', () => {
    afterEach(() => jest.restoreAllMocks())
  
    it('should call isDecimal of validator with value', () => {
      let spy = jest.spyOn(validator, 'isDecimal')
      isDecimalFactory()(value)
      expect(spy).toHaveBeenCalledWith(value)
    })
  
    it('Returns true if isDecimal returns true', () => {
      jest.spyOn(validator, 'isDecimal').mockImplementation(() => true)
      expect(isDecimalFactory()()).toBeTrue()
    })
  
    it('Should return error message if isDecimal returns false', () => {
      jest.spyOn(validator, 'isDecimal').mockImplementation(() => false)
      expect(isDecimalFactory()()).toBe(message.isDecimalError())
      expect(isDecimalFactory(msg)()).toBe(msg)
    })
  })
})