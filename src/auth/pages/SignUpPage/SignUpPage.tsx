import { useEffect, useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import * as S from '../styles';
import {
  BUTTON_NAME,
  ERROR_MESSAGE,
  INPUT_TYPE,
  REGEX_TYPE,
} from '../../constants';
import { PLACEHOLDER, TEST_ID } from '../../../commons/constants';
import { passwordIcon } from '../../../commons/utils';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../apis';
import { AxiosError } from 'axios';
import { useInput } from '../../hooks';

const SignUpPage = () => {
  const navigate = useNavigate();

  const email = useInput({
    regex: REGEX_TYPE.EMAIL,
    errorMessage: ERROR_MESSAGE.EMAIL_EMPTY_ERROR,
  });
  const password = useInput({
    regex: REGEX_TYPE.PASSWORD,
    errorMessage: ERROR_MESSAGE.PW_EMPTY_ERROR,
  });

  const confirmPassword = useInput({
    regex: password.input,
    errorMessage: ERROR_MESSAGE.PW_CONFIRM_ERROR,
  });

  useEffect(() => {
    if (confirmPassword.input) {
      if (confirmPassword.input === password.input)
        confirmPassword.setError('');
      else {
        confirmPassword.setError(ERROR_MESSAGE.PW_CONFIRM_ERROR);
      }
    }
  }, [confirmPassword.input, password.input]);

  const isDisabled =
    !email.input ||
    !password.input ||
    !confirmPassword.input ||
    !!email.error ||
    !!password.error ||
    !!confirmPassword.error;

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

  function navigateSignIn() {
    navigate('/signin', { replace: true });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await postSignUp({ email: email.input, password: password.input });
      navigateSignIn();
    } catch (error) {
      if (error instanceof AxiosError) {
        email.setError(ERROR_MESSAGE.EMAIL_EXIST_ERROR);
      }
    }
  }

  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNUP_EMAIL}
          onChange={email.onChange}
          errorMessage={email.error}
        />
        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={createPwType}
          placeholder={PLACEHOLDER.SIGNUP_PW}
          onChange={password.onChange}
          errorMessage={password.error}
          child={<i className={createPwIcon} onClick={onClickCreatePw} />}
        />
        <FormField
          testId={TEST_ID.CONFIRM_PASSWORD_INPUT}
          type={confirmPwType}
          placeholder={PLACEHOLDER.SIGNUP_CONFIRM_PW}
          onChange={confirmPassword.onChange}
          errorMessage={confirmPassword.error}
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
