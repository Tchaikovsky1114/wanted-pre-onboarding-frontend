import React from 'react'
import { styled } from 'styled-components'

const StyledParagraph = styled.p`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({color}) => color ? color : '#52bbe5' };
  background-color: ${({boxColor}) => boxColor ? boxColor : '#fff' };
  padding: 10px 20px;
  box-shadow: 0 0 4px rgba(32, 193, 237, 0.6);
  border-radius: 10px;
`
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
const date = new Date().toLocaleDateString('ko-KR',dateOptions);
export default function CurrentDate({color, boxColor}) {
  
  
  return (
    <StyledParagraph $boxColor={boxColor} color={color} >{date}</StyledParagraph>  
  )
}
