import React, { useEffect } from 'react'
import useRedirect from '../hooks/useRedirect'
import Layout from '../components/layout/Layout';
import Container from '../components/todolist/Container';

export default function Todo() {
  const { validateTokenExist } = useRedirect();

  useEffect(() =>{
    validateTokenExist();
  },[])

  return (
    <Layout>
      <Container />
    </Layout>
  )
}
