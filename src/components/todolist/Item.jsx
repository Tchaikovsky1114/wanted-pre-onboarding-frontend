import React from 'react'
import Button from '../common/button/Button'

// {
//   id: 1,
//   todo: '과제하기',
//   isCompleted: false,
//   userId: 1
// }


export default function Item({item}) {
  return (
    <li>
      <p>{item.todo}</p>
      <div>
      <Button title={item.isCompleted ? '진행' : '완료'} />
      <Button boxColor="#f41" title='삭제' />
      </div>
    </li>
  )
}
