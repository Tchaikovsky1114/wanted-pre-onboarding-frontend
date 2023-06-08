import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Form from '../components/sign-in/Form'
import { useLocation } from 'react-router-dom'

import useRedirect from '../hooks/useRedirect';

export default function SignIn() {
  const { state } = useLocation();
  const { validateTokenExist } = useRedirect();

  useEffect(() =>{
    validateTokenExist();
    // eslint-disable-next-line
  },[])

  useEffect(() =>{
    if(!state) return
      alert(`${state.email}로 회원가입이 완료되었습니다. 로그인해주세요.`)
      state.email = null;
  },[state])
  
  return (
    <Layout>
      <Form />
    </Layout>
  )
}
