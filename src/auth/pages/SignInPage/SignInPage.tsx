import { useState } from 'react';
import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useAuth, useInput } from '../../hooks';
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
import { postSignIn } from '../../apis';
import { AxiosError } from 'axios';

const SignInPage = () => {
  const navigate = useNavigate();
  const { dispatch, AUTH_REDUCER_ACTIONS } = useAuth();

  const email = useInput({
    regex: REGEX_TYPE.EMAIL,
    errorMessage: ERROR_MESSAGE.EMAIL_EMPTY_ERROR,
  });
  const password = useInput({
    regex: REGEX_TYPE.PASSWORD,
    errorMessage: ERROR_MESSAGE.PW_EMPTY_ERROR,
  });

  const isDisabled =
    !email.input || !password.input || !!email.error || !!password.error;

  const [pwType, setPwType] = useState(INPUT_TYPE.PASSWORD);
  const pwIcon = passwordIcon(pwType);
  function onClickPwIcon() {
    setPwType(
      pwType === INPUT_TYPE.TEXT ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT,
    );
  }

  function navigateSignUp() {
    navigate('/signup', { replace: true });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await postSignIn({
        email: email.input,
        password: password.input,
      });
      localStorage.setItem('token', response.data.access_token);
      dispatch({
        type: AUTH_REDUCER_ACTIONS.SIGNIN,
        payload: response.data.access_token,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          email.setError(ERROR_MESSAGE.EMAIL_NOT_EXIST_ERROR);
        } else if (error.response?.status === 401) {
          password.setError(ERROR_MESSAGE.PW_MATCH_ERROR);
        }
      }
    }
  }

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNIN_EMAIL}
          onChange={email.onChange}
          errorMessage={email.error}
        />
        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={pwType}
          placeholder={PLACEHOLDER.SIGNIN_PW}
          onChange={password.onChange}
          errorMessage={password.error}
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
