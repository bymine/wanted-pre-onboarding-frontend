import { createContext, ReactElement, useReducer } from "react";
import { initState, AUTH_REDUCER_ACTION_TYPE } from "../constants";
import { AuthReducerAction, AuthStateType } from "../types";

const reducer = (
  state: AuthStateType,
  action: AuthReducerAction
): AuthStateType => {
  switch (action.type) {
    case AUTH_REDUCER_ACTION_TYPE.SIGNIN:
      return { ...state, token: action.payload };

    case AUTH_REDUCER_ACTION_TYPE.SIGNOUT:
      return { ...state, token: action.payload };

    default:
      throw new Error();
  }
};

export const useAuthContext = (initAuthState: AuthStateType) => {
  const [state, dispatch] = useReducer(reducer, initAuthState);
  const handleSignIn = (token: string) => {
    dispatch({ type: AUTH_REDUCER_ACTION_TYPE.SIGNIN, payload: token });
  };

  const handleSignOut = () =>
    dispatch({ type: AUTH_REDUCER_ACTION_TYPE.SIGNOUT, payload: "" });

  return { state, handleSignIn, handleSignOut };
};

type useAuthContextType = ReturnType<typeof useAuthContext>;

const initContextState: useAuthContextType = {
  state: initState,
  handleSignIn: () => {},
  handleSignOut: () => {},
};

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const AuthContext = createContext<useAuthContextType>(initContextState);

export const AuthProvider = ({
  children,
  ...initState
}: ChildrenType & AuthStateType): ReactElement => {
  return (
    <AuthContext.Provider value={useAuthContext(initState)}>
      {children}
    </AuthContext.Provider>
  );
};
