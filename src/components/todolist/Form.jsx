import React, { useCallback, useContext } from 'react'
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';
import { validateValueEmpty } from '../../util/validate';
import IconButton from '../common/button/IconButton';
import AddIcon from '../common/icon/AddIcon';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import { TodoContext } from './Container';

export default function Form() {
  const { isShow, toggle } = useToggle();
  const { isValid : isTodoValid, onChange: onTodoValueChange, value: todoValue, onClear: onTodoClear } = useInput(validateValueEmpty);
  const { createTodo } = useContext(TodoContext);

  
  const onSubmit = useCallback( (e) => {
    e.preventDefault();
    createTodo({todo: todoValue});
    onTodoClear();
    toggle();
  },[todoValue])

  return (
    <>
    {
      !isShow
      ? <IconButton size="32px" boxColor="#4653e3" color="#4653e3" onClick={toggle} icon={<AddIcon color="#fff" size="16px"/>} />
      : <form onSubmit={(e) => e.preventDefault()}>
        <Input dataTestId="new-todo-input" value={todoValue} onChange={onTodoValueChange} />
        <Button dataTestId="new-todo-add-button" title="입력" onClick={onSubmit} disabled={!isTodoValid} />
      </form>
      }
    </>
  )
}
