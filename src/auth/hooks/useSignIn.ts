import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../apis';
import useAuth from './useAuth';
import useInput from './useInput';
import usePasswordIcon from './usePasswordIcon';
import {
  ERROR_MESSAGE,
  NAVIGATE_TO,
  REGEX_TYPE,
} from '../../commons/constants';

export default function useSignUp() {
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

  const { inputType, icon, onClick } = usePasswordIcon();

  function navigateSignUp() {
    navigate(NAVIGATE_TO.SIGNUP, { replace: true });
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

  return {
    email,
    password,
    isDisabled,
    inputType,
    icon,
    onClick,
    navigateSignUp,
    handleSubmit,
  };
}
