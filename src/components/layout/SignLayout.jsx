import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

export default function SignLayout({children}) {
  return (
    <Container>{children}</Container>
  )
}
