import React, { memo } from 'react'
import { styled } from 'styled-components'

const StyledLabel = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
  align-self: flex-start;
`

const Label = ({text}) => {
  return (
    <StyledLabel>{text}</StyledLabel>
  )
}

export default memo(Label);