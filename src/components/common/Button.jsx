import React from 'react'
import { styled } from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: #2f3bb4;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #2f3bb4;
  }
  &:disabled{
    background-color: #ccc;
    cursor: not-allowed;
    
  }
`

export default function Button({title,dataTestId,onClick,disabled = false}) {
  return (
    <StyledButton data-testid={dataTestId} disabled={disabled} onClick={onClick} >{title}</StyledButton>
  )
}
