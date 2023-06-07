import React from 'react'
import Item from './Item'
import { styled } from 'styled-components'

const mockingData = [
  {
    id: 1,
    todo: '과제하기',
    isCompleted: false,
    userId: 1
  },
  {
    id: 2,
    todo: '취업하기',
    isCompleted: false,
    userId: 1
  }
]

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

export default function List() {
  return (
    <ul>
      
      {mockingData.length === 0
      ? <StyledEmptyNotification>테스크가 존재하지 않습니다.</StyledEmptyNotification>
      : mockingData.map((item) => (
          <Item key={item.id} item={item} />
        ))
      }
    </ul>
  )
}