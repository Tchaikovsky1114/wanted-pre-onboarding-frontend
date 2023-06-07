
const setLocalStorage = (key) => (value) =>{
  localStorage.setItem(key, JSON.stringify(value))
}

export const setToken = setLocalStorage('access_token');

export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null ;
}



