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
    if(!response.ok) {
      const errorObject = await response.json();
      throw Error(errorObject.message);
    }
    return response  
  } catch (error) {
    throw Error(error);
  }
}

// body, contentType만 입력
export const signUpRequest = httpRequest('auth/signup')('POST') 
export const signInRequest = httpRequest('auth/signin')('POST') 
