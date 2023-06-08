import { useState } from 'react'

export default function useToggle() {
  const [isShow, setIsShow] = useState(false);

  const toggle = () =>{
    setIsShow(prev => !prev);
  }
  return {toggle, isShow}
}
