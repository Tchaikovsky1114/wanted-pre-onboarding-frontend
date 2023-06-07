import React from 'react'
import { styled } from 'styled-components'
import WantedIcon from '../common/icon/WantedIcon'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  img {
    width: 48px;
    height: 48px;
  }
  p {
    color: #2f3bb4;
    font-size: 24px;
    font-weight: bold;

  }
`

export default function SignLayout({children}) {
  return (
    <Container>
      <Header>
      <WantedIcon />
      <p>Wanted Pre Onboarding</p>  
      </Header>
      
      {children}
    </Container>
  )
}
