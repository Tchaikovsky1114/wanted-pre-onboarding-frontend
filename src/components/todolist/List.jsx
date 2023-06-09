import React, { memo, useContext, useEffect } from 'react'
import Item from './Item'
import { styled } from 'styled-components'
import { TodoContext } from './Container';


const StyledEmptyNotification = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  color: #4653e3;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
`

  const List = () => {
  const { todos,getTodos } = useContext(TodoContext);

  useEffect(() =>{
    getTodos();
    // eslint-disable-next-line
  },[])
  
  return (
    <ul>
      {todos.length === 0
      ? <StyledEmptyNotification>테스크가 존재하지 않습니다.</StyledEmptyNotification>
      : todos.map((item) => (
          <Item key={item.id} item={item} />
        ))
      }
    </ul>
  )
}
export default memo(List);