import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../apis';
import { ERROR_MESSAGE, REGEX_TYPE } from '../constants';
import useInput from './useInput';
import usePasswordIcon from './usePasswordIcon';

export default function useSignUp() {
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

  const {
    inputType: createPwType,
    icon: createPwIcon,
    onClick: onClickCreatePw,
  } = usePasswordIcon();

  const {
    inputType: confirmPwType,
    icon: confirmPwIcon,
    onClick: onClickConfirmPw,
  } = usePasswordIcon();

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

  return {
    email,
    password,
    confirmPassword,
    isDisabled,
    createPwType,
    createPwIcon,
    onClickCreatePw,
    confirmPwType,
    confirmPwIcon,
    onClickConfirmPw,
    navigateSignIn,
    handleSubmit,
  };
}
