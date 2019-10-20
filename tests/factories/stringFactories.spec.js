import {
  emailFactory
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

    it('Should return defaul email error if isEmail returns false', () => {
      jest.spyOn(validator, 'isEmail').mockImplementation(()=>false)
      expect(emailFactory()()).toBe(message.emailError)
    })

    it('Should return custom error if provided on invalid email', () => {
      jest.spyOn(validator, 'isEmail').mockImplementation(()=>false)
      expect(emailFactory(msg)()).toBe(msg)
    })
  })
})