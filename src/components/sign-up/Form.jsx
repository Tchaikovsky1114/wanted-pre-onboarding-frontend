import React from 'react'
import Input from '../common/input/Input'
import SignForm from '../common/form/Form'
import Label from '../common/label/Label'
import Button from '../common/button/Button'
import useInput from '../../hooks/useInput'
import { validateEightLength, validateIncludeAtSign, validateSameValue } from '../../util/validate'
import useAuth from '../../hooks/useAuth'

export default function Form() {
  const { onChange: onEmailChange, value: emailValue,isValid:isEmailValid  } = useInput(validateIncludeAtSign)
  const { onChange: onPasswordChange, value: passwordValue, isValid:isPasswordValid  } = useInput(validateEightLength)
  const { onChange: onPasswordConfirmChange, value: passwordConfirmValue,isValid: isPasswordConfirmValid  } = useInput(validateSameValue(passwordValue))
  const { postSignUp } = useAuth();
  return (
    
    <SignForm title="회원가입" >
      <Label text="이메일" />
      <Input dataTestId="email-input" onChange={onEmailChange} value={emailValue} />
      <Label text="비밀번호" />
      <Input dataTestId="password-input" onChange={onPasswordChange} value={passwordValue} type='password' />
      <Label text="비밀번호 확인" />
      <Input onChange={onPasswordConfirmChange} value={passwordConfirmValue} type='password' />
      <Button
        title="가입하기"
        dataTestId="signup-button"
        disabled={!(isEmailValid && isPasswordValid && isPasswordConfirmValid )}
        onClick={() => postSignUp({email: emailValue, password: passwordValue })} />
    </SignForm >
    
    
  )
}
