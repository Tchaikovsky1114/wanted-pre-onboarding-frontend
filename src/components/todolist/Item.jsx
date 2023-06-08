import React, { useCallback, useContext, useEffect } from 'react'
import Button from '../common/button/Button'
import { TodoContext } from './Container'
import CheckBox from '../common/checkbox/CheckBox'
import useToggle from '../../hooks/useToggle';
import Input from '../common/input/Input';
import useInput from '../../hooks/useInput';
import { validateValueEmpty } from '../../util/validate';



export default function Item({item}) {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const { isShow: isEdit, toggle: toggleEditMode} = useToggle();
  const { value, isValid, onChange, onDefaultvalue } = useInput(validateValueEmpty);
  

  const onClick = useCallback(async () =>{
    await updateTodo(item.id,{
      todo: item.todo,
      isCompleted: !item.isCompleted
    })
  },[])

  const onEdit = useCallback(async () =>{
    await updateTodo(item.id,{
      todo: value,
      isCompleted: item.isCompleted
    })
    toggleEditMode();
  },[value])

  const clearInput = useCallback(() =>{
    toggleEditMode();
    onDefaultvalue(item.todo);
  },[])

  useEffect(() =>{
    onDefaultvalue(item.todo);
  },[])
  
  return (
    <li>
      <CheckBox item={item} updateTodo={updateTodo} onClick={onClick} />

      <div>
      {!isEdit ? <p>{item.todo}</p> : <Input type="text" value={value} onChange={onChange} dataTestId="modify-input"  /> }
      </div>
      
      <div>
      {
      !isEdit
      ?
      <>
        <Button dataTestId="modify-button" title="수정" onClick={toggleEditMode} />
        <Button dataTestId="delete-button" onClick={() => deleteTodo(item.id)} boxColor="#f41" title='삭제' />
      </>
      : 
      <>
        <Button dataTestId="submit-button" title="제출 " onClick={onEdit} disabled={!isValid} />
        <Button dataTestId="cancel-button"  onClick={clearInput} boxColor="#24FE54" title='취소' />
      </>
      }
      </div>
    </li>
  )
  
}
