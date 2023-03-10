import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignIn, postSignUp } from '../apis/index';
import useAuth from './useAuth';

export const AuthForm = {
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',
};

export type SignType = {
  email: string;
  password: string;
};

export type AuthFormType = {
  type: string;
};

function useAuthForm({ type }: AuthFormType) {
  const navigate = useNavigate();

  const { dispatch, AUTH_REDUCER_ACTIONS } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const [confirmPwError, setConfirmPwError] = useState('');

  const isFormEmpty =
    type === AuthForm.SIGNIN
      ? email === '' || password === ''
      : email === '' || password === '' || confirmPassword === '';

  const isFormError =
    type === AuthForm.SIGNIN
      ? emailError !== '' || pwError !== ''
      : emailError !== '' || pwError !== '' || confirmPwError !== '';

  const isDisabled = isFormEmpty || isFormError;

  function handleEmailInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const emailRegex = /@/;
    const isEmailValid = emailRegex.test(value);

    setEmail(value);

    if (isEmailValid) setEmailError('');
    else setEmailError('Please enter a valid email');
  }

  function handlePasswordInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const isPasswordValid = value.length >= 8;

    setPassword(value);

    if (type === AuthForm.SIGNUP && confirmPassword) {
      if (confirmPassword !== value) setConfirmPwError('Please match password');
      else setConfirmPwError('');
    }

    if (isPasswordValid) setPwError('');
    else setPwError('Please enter at least 8 charatcer');
  }

  function handleConfirmPasswordInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const isConfirmPasswordValid = value === password;

    setConfirmPassword(value);

    if (isConfirmPasswordValid) setConfirmPwError('');
    else setConfirmPwError('Please match password');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    switch (type) {
      case AuthForm.SIGNIN: {
        try {
          const response = await postSignIn({ email, password });
          localStorage.setItem('token', response.data.access_token);
          dispatch({
            type: AUTH_REDUCER_ACTIONS.SIGNIN,
            payload: response.data.access_token,
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
              setEmailError('User does not exist');
            } else if (error.response?.status === 401) {
              setPwError('Password error');
            }
          }
        }
        break;
      }
      case AuthForm.SIGNUP: {
        try {
          await postSignUp({ email, password });
          navigateSignIn();
        } catch (error) {
          if (error instanceof AxiosError) {
            setEmailError('The same email already exists.');
          }
        }
        break;
      }

      default:
        throw new Error('Error AuthForm');
    }
  }

  function navigateSignIn() {
    navigate('/signin', { replace: true });
  }

  function navigateSignUp() {
    navigate('/signup', { replace: true });
  }

  return {
    emailError,
    pwError,
    confirmPwError,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleSubmit,
    isDisabled,
    navigateSignIn,
    navigateSignUp,
  };
}

export default useAuthForm;
