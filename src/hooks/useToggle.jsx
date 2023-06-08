import { useCallback, useState } from 'react'

export default function useToggle() {
  const [isShow, setIsShow] = useState(false);

  const toggle = useCallback(() =>{
    setIsShow(prev => !prev);
  },[])
  return {toggle, isShow}
}
