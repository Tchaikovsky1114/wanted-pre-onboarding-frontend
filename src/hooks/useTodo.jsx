import { useCallback, useState } from 'react';
import { httpRequest, todoRequest } from '../util/httpRequest';
import { getLocalStorage } from '../util/localStorage'




export default function useTodo() {
  const [todos, setTodos] = useState([]);
  // 토큰을 컴포넌트 밖에서 가져오면 토큰이 없을 때도 컴포넌트가 렌더링 되기 때문에 컴포넌트 안에서 토큰을 가져와야 한다.
  const token = getLocalStorage('access_token');
  
  const createTodo = useCallback( async (bodyObject) => {
    if(!token) return;
    try {
      const response = await todoRequest('POST',token)(JSON.stringify(bodyObject))();
      const data = await response.json();
      setTodos((prev) => [...prev,data])
    } catch (error) {
      alert(error);
    }
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  },[todos])

  return {
    todos,createTodo, getTodos, updateTodo, deleteTodo
  }
}
