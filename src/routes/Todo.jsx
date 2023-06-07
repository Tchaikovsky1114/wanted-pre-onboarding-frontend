import React, { useEffect } from 'react'
import useRedirect from '../hooks/useRedirect'
import Layout from '../components/layout/Layout';

export default function Todo() {
  const { validateTokenExist } = useRedirect();

  useEffect(() =>{
    validateTokenExist();
  },[])
  return (
    <Layout>

    </Layout>
  )
}
