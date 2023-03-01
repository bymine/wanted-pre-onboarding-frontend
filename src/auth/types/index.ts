export type AuthType = {
  email: string;
  password: string;
};

export type FormFieldType = {
  testId: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  child?: React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export type AuthStateType = {
  token: string;
};

export type AuthReducerAction = {
  type: string;
  payload: string;
};
