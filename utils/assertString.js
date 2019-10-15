export default (value) => {
  if(typeof value === 'string'){
    return value.length > 0
  } else {
    return false
  }
}