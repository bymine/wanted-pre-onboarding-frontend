export const TEST_ID = {
  EMAIL_INPUT: 'email-input',
  PASSWORD_INPUT: 'password-input',
  CONFIRM_PASSWORD_INPUT: 'confirm-password-input',
  MODIFY_INPUT: 'modify-input',
  NEW_TODO_INPUT: 'new-todo-input',

  SIGNIN_BUTTON: 'signin-button',
  SIGNUP_BUTTON: 'signup-button',
  SUBMIT_BUTTON: 'submit-button',
  MODIFY_BUTTON: 'modify-button',
  CANCEL_BUTTON: 'cancel-button',
  DELETE_BUTTON: 'delete-button',
  NEW_TODO_ADD_BUTTON: 'new-todo-add-button',
};
export const PLACEHOLDER = {
  SIGNIN_EMAIL: 'Enter your Email',
  SIGNIN_PW: 'Enter your Password',
  SIGNUP_EMAIL: 'Enter your Create Email',
  SIGNUP_PW: 'Enter your Create Password',
  SIGNUP_CONFIRM_PW: 'Enter your Confirm Password',
  ADD_NEW_TODO: 'Enter new todo',
};
export const INPUT_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  SUBMIT: 'submit',
  CHECKBOX: 'checkbox',
};

export const BUTTON_NAME = {
  SIGNIN: 'Sign In',
  SIGNUP: 'Sign Up',
  SUBMIT: 'Submit',
  EDIT: 'Edit',
  CANCEL: 'Cancel',
  DELETE: 'DELETE',
  ADD: 'ADD',
} as const;

export const ERROR_MESSAGE = {
  EMAIL_EMPTY_ERROR: 'Please enter a valid email',
  EMAIL_NOT_EXIST_ERROR: 'User does not exist',
  EMAIL_EXIST_ERROR: 'The same email already exists',
  PW_EMPTY_ERROR: 'Please enter at least 8 characters',
  PW_CONFIRM_ERROR: 'Please match password',
  PW_MATCH_ERROR: 'Password error',
} as const;

export const REGEX_TYPE = {
  EMAIL: RegExp(/@/),
  PASSWORD: RegExp(/^\d{8,}$/),
};

export const CONFIRM_MESSAGE = {
  UPDATE_CONFIRM_MESSAGE: 'Are you sure you want to edit todo?',
  DELETE_CONFIRM_MESSAGE: 'Are you sure you want to delete todo?',
} as const;

export const AUTH_API_URL = {
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

export const TODO_API_URL = '/todos/';

export const NAVIGATE_TO = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TODO: '/todo',
};
