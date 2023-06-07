import { useCallback } from 'react';
import { getLocalStorage } from '../util/localStorage';
import { useNavigate } from 'react-router-dom';

export default function useRedirect() {
  const navigate = useNavigate();

  const validateTokenExist = useCallback((redirectUrl = '/signin') =>{  
    const token = getLocalStorage('access_token');
    return token ? navigate('/todo',{replace: true}) : navigate(redirectUrl,{ replace: true });
  },[navigate]);
  return { validateTokenExist }
}
