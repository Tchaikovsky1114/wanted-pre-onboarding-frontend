import { useCallback } from 'react';
import { getLocalStorage } from '../util/localStorage';
import { useNavigate } from 'react-router-dom';

export default function useRedirect() {
  const navigate = useNavigate();

  const validateTokenExist = useCallback(() =>{  
    const token = getLocalStorage('access_token');
    return token ? navigate('/todo',{replace: true}) : navigate('/signin',{ replace: true });
  },[navigate]);
  return { validateTokenExist }
}
