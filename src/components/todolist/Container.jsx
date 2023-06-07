import { keyframes, styled } from "styled-components"
import CurrentDate from "../common/CurrentDate"

import Form from "./Form"
import List from "./List"
const boxFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  form{
    display: flex;
    gap: 4px;
    width: 100%;
    animation: ${boxFade} 0.4s ease-in-out;
    input {
      flex: 0.8;
    }
    button {
      flex: 0.2;
    }
  }
  ul {
    margin:0;
    padding: 0;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`


export default function Container() {
  
  return (
    <StyledContainer>
      <CurrentDate />
      <Form />
      <List />
    </StyledContainer>
  )
}
