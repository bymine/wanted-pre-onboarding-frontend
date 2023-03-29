import { useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useAuthForm } from '../../hooks';
import * as S from '../styles';
import { AuthForm } from '../../hooks/useAuthForm';
import { BUTTON_NAME, INPUT_TYPE } from '../../constants';
import { PLACEHOLDER, TEST_ID } from '../../../commons/constants';
import { passwordIcon } from '../../../commons/utils';

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

  const [pwType, setPwType] = useState(INPUT_TYPE.PASSWORD);
  const pwIcon = passwordIcon(pwType);
  function onClickPwIcon() {
    setPwType(
      pwType === INPUT_TYPE.TEXT ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT,
    );
  }

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNIN_EMAIL}
          onChange={handleEmailInput}
          errorMessage={emailError}
        />

        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={pwType}
          placeholder={PLACEHOLDER.SIGNIN_PW}
          onChange={handlePasswordInput}
          errorMessage={pwError}
          child={<i className={pwIcon} onClick={onClickPwIcon} />}
        />
        <FormField
          testId={TEST_ID.SIGNIN_BUTTON}
          type={INPUT_TYPE.SUBMIT}
          value={BUTTON_NAME.SIGNIN}
          disabled={isDisabled}
        />

        <S.LinkBox>
          Don't have an account?
          <S.Span onClick={navigateSignUp}>SignUp</S.Span>
        </S.LinkBox>
      </form>
    </S.Container>
  );
};

export default withAuth(SignInPage);
