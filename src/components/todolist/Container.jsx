import { styled } from "styled-components"
import CurrentDate from "../common/CurrentDate"

import Form from "./Form"
import List from "./List"
import { boxFade } from "../common/anim/keyframe"


const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
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
    position: relative;
    margin:0;
    padding: 8px 16px;
    box-sizing: border-box;
    min-height: 480px;
    background-color: #fff;
    border: 1px solid #4653e36c;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 0 4px #4653e3;
    overflow: hidden;
    li {
      background-color: aliceblue;
      border: 1px solid #4653e36c;
      border-radius: 8px;
      padding: 4px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 2px #4653e3fa;
      p {
        text-align: center;
        flex: 0.7;
        font-weight: bold;
        color: #4653e3;
      }
      div {
        flex: 0.3;
        display: flex;
        gap: 4px;
        margin: 0px 16px;
      }
    }
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
