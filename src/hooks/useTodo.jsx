import { useCallback, useState } from 'react';
import { httpRequest, todoRequest } from '../util/httpRequest';
import { getLocalStorage } from '../util/localStorage'


const token = getLocalStorage('access_token');

export default function useTodo() {
  const [todos, setTodos] = useState([]);
  
  const createTodo = useCallback( async (bodyObject) => {
    if(!token) return;
    try {
      const response = await todoRequest('POST',token)(JSON.stringify(bodyObject))();
      const data = await response.json();
      setTodos((prev) => [...prev,data])
    } catch (error) {
      alert(error);
    }
  },[])

  const getTodos = useCallback( async () => {
    if(!token) return;
    try {
      const response = await todoRequest('GET',token)()();
      const data = await response.json();
      setTodos(data);
      return data;
    } catch (error) {
      alert(error);
    }
  },[])

  const updateTodo = useCallback(async (id,bodyObject) => {
    if(!token) return;
    try {
      const response = await httpRequest(`todos/${id}`)('PUT',token)(JSON.stringify(bodyObject))();
      const data = await response.json();
      const beforeUpdate = todos.filter((todo) => todo.id !== data.id);
      setTodos(() => [...beforeUpdate,data])
    } catch (error) {
      alert(error);
    }
  },[])

  const deleteTodo = useCallback(async (id) => {
    if(!token) return;
    try {
      await httpRequest(`todos/${id}`)('DELETE',token)()();
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      alert(error);
    }
  },[])

  return {
    todos,createTodo, getTodos, updateTodo, deleteTodo
  }
}
