export { default as useAuthForm } from "./useAuthForm";
export enum AuthForm {
  SIGNIN,
  SIGNUP,
}

export type AuthFormType = {
  type: AuthForm;
};
