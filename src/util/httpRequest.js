import { API_URL } from "../constants/api"


const httpRequest = (url) => (method = 'POST') => (bodyObject) => async(contentType = 'application/json') =>{

  try {
    const response = await fetch(API_URL + url,{
      method: method,
      headers:{
        'Content-Type': contentType
      },
      body: method === 'GET' ? null : bodyObject
    })
    
    return response  
  } catch (error) {
    console.error(error);
    return {message: `${url}에 대한 요청 실패`,error};
  }
  
}

// body, contentType만 입력
export const signUpRequest = httpRequest('auth/signup')('POST') 
export const signInRequest = httpRequest('auth/signin')('POST') 
