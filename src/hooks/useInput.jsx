import { useEffect, useState } from "react"

export default function useInput(validateFunction) {
  const [value,setValue] = useState('')
  const [isValid, setIsValid] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() =>{
    setIsValid(validateFunction(value))
  },[value,validateFunction])

  return {value, onChange, isValid}
}
