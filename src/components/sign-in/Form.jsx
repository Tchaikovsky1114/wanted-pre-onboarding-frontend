import SignForm from '../common/Form';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import useInput from '../../hooks/useInput';
import { validateEightLength, validateIncludeAtSign } from '../../util/validate';

export default function Form() {
  const { onChange: onEmailChange, value: emailValue,isValid:isEmailValid  } = useInput(validateIncludeAtSign)
  const { onChange: onPasswordChange, value: passwordValue, isValid:isPasswordValid  } = useInput(validateEightLength)
  return (
    <SignForm title="로그인">
      <Label text="이메일" />
      <Input dataTestId="email-input" type="email" onChange={onEmailChange} value={emailValue} />
      <Label text="비밀번호" />
      <Input dataTestId="password-input" type="password" onChange={onPasswordChange} value={passwordValue} />
      <Button dataTestId="signin-button" title="로그인" disabled={!(isEmailValid && isPasswordValid)} />
    </SignForm>
  )
}
