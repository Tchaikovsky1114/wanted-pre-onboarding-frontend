import { useCallback } from "react"
import { signInRequest, signUpRequest } from "../util/httpRequest"



export default function useAuth() {
  
  const postSignUp = useCallback(async (bodyObject) => {
    try {
      await signUpRequest(JSON.stringify(bodyObject))();  
    } catch (error) {
      alert(error.message);
    }
    
  },[])
  
  const postSignIn = useCallback( async (bodyObject) => {
    try {
      const response = await signInRequest(JSON.stringify(bodyObject))();
      const data = await response.json(); // access-token
      return data;  
    } catch (error) {
      alert(error.message);
    }
  },[])

  return { postSignIn, postSignUp }
}
