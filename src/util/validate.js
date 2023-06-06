
const validateIncludeSpecificWord = (regex) => (value) => {
  return value.search(regex) >= 0 ? true : false
}

export const validateIncludeAtSign = validateIncludeSpecificWord(/@/g)

const validateValueLength = (length) => (value) =>{
  return value.length >= length
}

export const validateEightLength = validateValueLength(8)


export const validateSameValue = (value1) => (value2) =>{
  if(!value1) return false;
  return value1 === value2
}

