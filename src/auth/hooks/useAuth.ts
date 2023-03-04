import { useContext } from 'react';
import AuthContext, { UseAuthContextType } from '../contexts/AuthProvider';

function useAuth(): UseAuthContextType {
  return useContext(AuthContext);
}

export default useAuth;
