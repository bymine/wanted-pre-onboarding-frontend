import { useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useAuthForm } from '../../hooks';
import * as S from '../styles';
import { AuthForm } from '../../hooks/useAuthForm';

const SignInPage = () => {
  const {
    emailError,
    pwError,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    isDisabled,
    navigateSignUp,
  } = useAuthForm({ type: AuthForm.SIGNIN });

  const [pwType, setPwType] = useState('password');

  function onClickPwIcon() {
    setPwType(pwType === 'text' ? 'password' : 'text');
  }
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
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
          type={pwType}
          placeholder="Enter your Password"
          onChange={handlePasswordInput}
          errorMessage={pwError}
          child={
            <i
              className={`bx ${
                pwType === 'text' ? 'bx-show' : 'bx-hide'
              } show-hide`}
              onClick={onClickPwIcon}
            />
          }
        />
        <FormField
          testId="signin-button"
          type="submit"
          value="Sign in"
          disabled={isDisabled}
        />

        <S.LinkBox>
          Don't have an account?{' '}
          <S.Span onClick={navigateSignUp}>SignUp</S.Span>
        </S.LinkBox>
      </form>
    </S.Container>
  );
};

export default withAuth(SignInPage);
