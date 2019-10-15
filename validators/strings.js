export const lengthFactory = (length, errorMessage) => {
  if (!errorMessage) {
    errorMessage = `Need to be exactly ${length} character(s)`
  }
  return value => {
    if (typeof value === 'string') {
      return value.trim().length == length || errorMessage
    } else {
      throw 'Invalid argument'
    }
  }
}

export const stringFactory = (errorMessage = 'Invalid input') => {
  return value => {
    return typeof value === 'string' || errorMessage
  }
}

export const digitFactory = () => {
  return () => { return true }
}