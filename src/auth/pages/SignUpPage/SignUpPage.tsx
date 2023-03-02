import { useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useAuthForm } from '../../hooks';
import * as S from '../styles';
import { AuthForm } from '../../constants';

const SignUpPage = () => {
  const {
    emailError,
    pwError,
    confirmPwError,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleSubmit,
    isDisabled,
    navigateSignIn,
  } = useAuthForm({ type: AuthForm.SIGNUP });

  const [createPwType, setCreatePwType] = useState('password');
  const [confirmPwType, setConfirmPwType] = useState('password');

  function onClickCreatePw() {
    setCreatePwType(createPwType === 'text' ? 'password' : 'text');
  }

  function onClickConfirmPw() {
    setConfirmPwType(confirmPwType === 'text' ? 'password' : 'text');
  }

  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId="email-input"
          type="text"
          placeholder="Enter your Email"
          onChange={handleEmailInput}
          errorMessage={emailError}
        />
        <FormField
          testId="password-input"
          type={createPwType}
          placeholder="Enter your Create Password"
          onChange={handlePasswordInput}
          errorMessage={pwError}
          child={
            <i
              className={`bx ${
                createPwType === 'text' ? 'bx-show' : 'bx-hide'
              } show-hide`}
              onClick={onClickCreatePw}
            />
          }
        />
        <FormField
          testId="repassword-input"
          type={confirmPwType}
          placeholder="Enter your Confirm Password"
          onChange={handleConfirmPasswordInput}
          errorMessage={confirmPwError}
          child={
            <i
              className={`bx ${
                confirmPwType === 'text' ? 'bx-show' : 'bx-hide'
              } show-hide`}
              onClick={onClickConfirmPw}
            />
          }
        />
        <FormField
          testId="signup-button"
          type="submit"
          value="Sign up"
          disabled={isDisabled}
        />

        <S.LinkBox>
          Already have an account?{' '}
          <S.Span onClick={navigateSignIn}>Signin</S.Span>
        </S.LinkBox>
      </form>
    </S.Container>
  );
};

export default withAuth(SignUpPage);
