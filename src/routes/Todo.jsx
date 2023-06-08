import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/todolist/Container';
import useRedirect from "../hooks/useRedirect";
export default function Todo() {
  const { validateTokenExist } = useRedirect();
  useEffect(() => {
    validateTokenExist();
    // eslint-disable-next-line
  },[])
  return (  
    <Layout>
      <Container />
    </Layout>
  )
}
