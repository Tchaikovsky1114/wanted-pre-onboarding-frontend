import React, { useEffect } from 'react'
import Form from '../components/sign-up/Form'
import Layout from '../components/layout/Layout'
import useRedirect from '../hooks/useRedirect'



export default function SignUp() {
  
  const { validateTokenExist } = useRedirect();
  
  useEffect(() =>{
    validateTokenExist('/signup');
  },[])

  return (
  <Layout>
    <Form />
  </Layout>
  )
}
