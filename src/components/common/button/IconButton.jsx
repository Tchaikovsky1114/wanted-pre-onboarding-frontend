import React from 'react'
import { styled } from 'styled-components'

const StyledButton = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size}) => size ? size : '40px'};
  height: ${({size}) => size ? size : '40px'};
  border-radius: 50%;
  border: 2px solid ;
  border-color: ${({color}) => color ? color : '#000'};
  background-color: ${({boxColor}) => boxColor ? boxColor : '#fff'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity:0.68;
  }
`;

export default function IconButton({icon,color,onClick,size,boxColor}) {
  return (
    <StyledButton color={color} onClick={onClick} size={size} boxColor={boxColor}>
      {icon}
    </StyledButton>
  )
}
