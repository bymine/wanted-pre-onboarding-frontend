import { AuthStateType } from "../types";

export const initState: AuthStateType = {
  token: "",
};

export const AUTH_REDUCER_ACTION_TYPE = {
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNUP",
};

export const AuthForm = {
  SIGNIN: "SIGNIN",
  SIGNUP: "SIGNUP",
};
