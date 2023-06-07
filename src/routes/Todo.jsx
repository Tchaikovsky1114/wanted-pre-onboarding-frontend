import React, { useEffect } from 'react'
import useRedirect from '../hooks/useRedirect'

export default function Todo() {
  const { validateTokenExist } = useRedirect();

  useEffect(() =>{
    validateTokenExist();
  },[])
  return (
    <div>Todo</div>
  )
}
