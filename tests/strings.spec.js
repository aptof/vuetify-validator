import {
  emailFactory
} from '../utils/strings'
import * as defaul from '../utils/default'
import validator from 'validator'

describe('strings.js', () => {
  let msg = 'Custom error or any stirng'

  it('emailFactory is a funiotn and returns a function', () => {
    expect(emailFactory).toBeFunction()
    expect(emailFactory()).toBeFunction()
  })

  //Testing the return value not the functionality of validatorjs library
  describe('The function returned by email factory', () => {
    it('Should call isEmail of validator library', () => {
      let spy = jest.spyOn(validator, 'isEmail')
      let email = 'tusharbakshi6@gmail.com'
      emailFactory()(email)
      expect(spy).toHaveBeenCalledWith(email)
    })

    it('Returns true if valid email', () => {
      expect(emailFactory()('tusharbakshi6@gmail.com')).toBeTrue()
    })

    it('Should return defaul email error if invalid email', () => {
      expect(emailFactory()('notaemail')).toBe(defaul.emailError)
    })

    it('Should return custom error if provided on invalid email', () => {
      expect(emailFactory(msg)('notaemail')).toBe(msg)
    })

    it.each([[undefined], [null], ['    '], ['']])('Should return true if value is %p', (value) => {
      expect(emailFactory()(value)).toBeTrue()
    })
  })
})