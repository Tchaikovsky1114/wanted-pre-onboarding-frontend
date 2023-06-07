import React, { useEffect } from 'react'
import Form from '../components/sign-up/Form'
import SignLayout from '../components/layout/SignLayout'
import useRedirect from '../hooks/useRedirect'



export default function SignUp() {
  const { validateTokenExist } = useRedirect();
  useEffect(() =>{
    validateTokenExist();
  },[])
  return (
  <SignLayout>
    <Form />
  </SignLayout>
  )
}
