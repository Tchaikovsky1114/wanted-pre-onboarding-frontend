import React, { useContext } from 'react'
import Button from '../common/button/Button'
import { TodoContext } from './Container'


export default function Item({item}) {
  const { updateTodo, deleteTodo } = useContext(TodoContext)
  return (
    <li>
      <input type="checkbox" />
      <p>{item.todo}</p>
      <div>
      <Button dataTestId="modify-button" title="수정" />
      <Button dataTestId="delete-button" onClick={() => deleteTodo(item.id)} boxColor="#f41" title='삭제' />
      </div>
    </li>
  )
}
