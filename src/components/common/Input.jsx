import React from 'react'
import { styled } from 'styled-components'

const StyledInput = styled.input`
  width: calc(100% - 32px);
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #2f3bb4;
    caret-color: #2f3bb4;
  }
`


export default function Input({value,onChange,dataTestId,type = 'text'}) {
  return (
    <StyledInput type={type} value={value} onChange={onChange} dataTestId={dataTestId} />
  )
}
