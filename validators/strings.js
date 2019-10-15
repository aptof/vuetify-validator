export const length = (value, length, message) => {
  if(!message){
    message = `Need to be exactly ${length} character(s)`
  }
  if (typeof value === 'string') {
    return value.length == length || message
  } else {
    throw 'Invalid argument'
  }
}

export const str = (value, message = 'Invalid input') => {
  return typeof value === 'string' || message
}