import { useCallback } from "react"
import { signInRequest, signUpRequest } from "../util/httpRequest"
import { useNavigate } from "react-router-dom";
import { setToken } from "../util/localStorage";

export default function useAuth() {
  const navigate = useNavigate();

  const postSignUp = useCallback(async (bodyObject) => {
    try {
      await signUpRequest(JSON.stringify(bodyObject))();
      navigate('/signin',{
        state: { email: bodyObject.email }
      });
    } catch (error) {
      alert(error);
    }
  },[navigate])
  
  const postSignIn = useCallback( async (bodyObject) => {
    try {
      const response = await signInRequest(JSON.stringify(bodyObject))();
      const data = await response.json(); // access-token
      setToken(data.access_token);
      navigate('/todo');
    } catch (error) {
      alert(error);
    }
  },[navigate])

  const signOut = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/signin');
  },[navigate])

  return { postSignIn, postSignUp, signOut }
}
