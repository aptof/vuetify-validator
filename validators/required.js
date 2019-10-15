export const requiredFactory = (errorMessage = 'Required') => {
  return (value) => {
    if (value === undefined || value === null) {
      return errorMessage
    } else if (typeof value === 'string') {
      return value.trim().length > 0 || errorMessage
    }
    return true
  }
}