import React from 'react'
import { styled } from 'styled-components'
import Form from '../components/sign-up/Form'



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

`

export default function SignUp() {
  return (
    <Container>
      <Form />
    </Container>
  )
}
