import React from 'react'
import { styled } from 'styled-components'

const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  padding: 16px 32px;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
  background-color: #fff;
  h3{
    font-size: 18px;
    color: #4653e3;
  }
`

export default function Form({children,title}) {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <h3>{title}</h3>
      {children}
    </StyledForm>  
  )
}
