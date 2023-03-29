import { useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useAuthForm } from '../../hooks';
import * as S from '../styles';
import { AuthForm } from '../../hooks/useAuthForm';
import { BUTTON_NAME, INPUT_TYPE } from '../../constants';
import { PLACEHOLDER, TEST_ID } from '../../../commons/constants';
import { passwordIcon } from '../../../commons/utils';

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

  const [createPwType, setCreatePwType] = useState(INPUT_TYPE.PASSWORD);
  const [confirmPwType, setConfirmPwType] = useState(INPUT_TYPE.PASSWORD);
  const createPwIcon = passwordIcon(createPwType);
  const confirmPwIcon = passwordIcon(confirmPwType);

  function onClickCreatePw() {
    setCreatePwType(
      createPwType === INPUT_TYPE.TEXT ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT,
    );
  }

  function onClickConfirmPw() {
    setConfirmPwType(
      confirmPwType === INPUT_TYPE.TEXT ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT,
    );
  }

  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNUP_EMAIL}
          onChange={handleEmailInput}
          errorMessage={emailError}
        />
        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={createPwType}
          placeholder={PLACEHOLDER.SIGNUP_PW}
          onChange={handlePasswordInput}
          errorMessage={pwError}
          child={<i className={createPwIcon} onClick={onClickCreatePw} />}
        />
        <FormField
          testId={TEST_ID.CONFIRM_PASSWORD_INPUT}
          type={confirmPwType}
          placeholder={PLACEHOLDER.SIGNUP_CONFIRM_PW}
          onChange={handleConfirmPasswordInput}
          errorMessage={confirmPwError}
          child={<i className={confirmPwIcon} onClick={onClickConfirmPw} />}
        />
        <FormField
          testId={TEST_ID.SIGNUP_BUTTON}
          type={INPUT_TYPE.SUBMIT}
          value={BUTTON_NAME.SIGNUP}
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
