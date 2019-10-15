import { requiredError } from './default'
export const requiredFactory = (errorMessage = requiredError) => {
  return (value) => {
    if (value === undefined || value === null) {
      return errorMessage
    } else if (typeof value === 'string') {
      return value.trim().length > 0 || errorMessage
    }
    return true
  }
}