import { useCallback, useEffect, useState } from "react"

export default function useInput(validateFunction) {
  const [value,setValue] = useState('')
  const [isValid, setIsValid] = useState(false);
  
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  },[])
  
  const onClear = useCallback(() => {
    setValue('')
  },[])

  const onDefaultvalue = useCallback((defaultValue) =>{
    setValue(defaultValue);
  },[])
  
  useEffect(() =>{
    setIsValid(validateFunction(value))
  },[value,validateFunction])

  return {value, onChange, isValid, onClear, onDefaultvalue}
}
