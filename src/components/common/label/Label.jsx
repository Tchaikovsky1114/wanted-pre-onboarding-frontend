import React from 'react'
import { styled } from 'styled-components'

const StyledLabel = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
  align-self: flex-start;
`

export default function Label({text}) {
  return (
    <StyledLabel>{text}</StyledLabel>
  )
}
