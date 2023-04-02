import { createContext, ReactElement, useReducer } from 'react';
import { localTokenRepository } from '../..';

type AuthType = {
  token: string;
};

type AuthStateType = { token: string | null };

const REDUCER_ACTION_TYPE = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
};

type AuthReducerAction = {
  type: string;
  payload?: AuthType;
};

const reducer = (
  state: AuthStateType,
  action: AuthReducerAction,
): AuthStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SIGNIN: {
      if (!action.payload)
        throw new Error('action payload missing in SIGNIN action');
      const { token } = action.payload;
      return { ...state, token: token };
    }

    case REDUCER_ACTION_TYPE.SIGNOUT: {
      return { ...state, token: null };
    }

    default:
      throw new Error('Auth reducer action type');
  }
};

const useAuthContext = () => {
  const [state, dispatch] = useReducer(reducer, {
    token: localTokenRepository.get(),
  });

  const AUTH_REDUCER_ACTIONS = REDUCER_ACTION_TYPE;

  return { dispatch, AUTH_REDUCER_ACTIONS, state };
};

export type UseAuthContextType = ReturnType<typeof useAuthContext>;

const initAuthContextState: UseAuthContextType = {
  dispatch: () => {
    return;
  },
  AUTH_REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  state: { token: null },
};

export const AuthContext =
  createContext<UseAuthContextType>(initAuthContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <AuthContext.Provider value={useAuthContext()}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
