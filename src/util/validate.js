
const validateIncludeSpecificWord = (regex) => (value) => {
  return value.search(regex) >= 0 ? true : false
}
// currying
export const validateIncludeAtSign = validateIncludeSpecificWord(/@/g)

const validateValueLength = (length) => (value) =>{
  return value.length >= length
}
// currying
export const validateEightLength = validateValueLength(8)


export const validateSameValue = (value1) => (value2) =>{
  if(!value1) return false;
  return value1 === value2
}

export const validateValueEmpty = (value) => {
  return value ? true : false
}