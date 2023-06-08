import { createContext } from "react"
import { styled } from "styled-components"
import CurrentDate from "../common/custom/CurrentDate"
import Form from "./Form"
import List from "./List"
import { boxFade } from "../common/anim/keyframe"
import useTodo from "../../hooks/useTodo";


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
    min-height: 200px;
    background-color: #fff;
    border: 1px solid #4653e36c;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 0 4px #4653e3;
    overflow: scroll;
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
      div:nth-child(2) {
        flex: 0.8;
        height: 52px;
      }
      p {
        text-align: center;
        font-weight: bold;
        color: #4653e3;
      }
      div {
        display: flex;
        gap: 4px;
        margin: 0px 16px;
      }
    }
  }
`

export const TodoContext = createContext(null);

export default function Container() {
  const {todos, getTodos, createTodo, deleteTodo, updateTodo } = useTodo();



  return (  
    <TodoContext.Provider value={{todos, createTodo, getTodos, updateTodo, deleteTodo}}>
    <StyledContainer>
      <CurrentDate />
      <Form  />
      <List />
    </StyledContainer>
    </TodoContext.Provider>
  )
}
