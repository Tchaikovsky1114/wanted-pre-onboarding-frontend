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
  },[todos])

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
      const index = todos.findIndex((todo) => todo.id === data.id);
      
      setTodos((prev) => {
        const newTodos = [...prev];
        newTodos[index] = data;
        return newTodos;
      });
    } catch (error) {
      alert(error);
    }
  },[todos])

  const deleteTodo = useCallback(async (id) => {
    if(!token) return;
    try {
      await httpRequest(`todos/${id}`)('DELETE',token)()();
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      alert(error);
    }
  },[todos])

  return {
    todos,createTodo, getTodos, updateTodo, deleteTodo
  }
}
