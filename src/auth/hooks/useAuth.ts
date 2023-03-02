import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function useAuth() {
  const { state, handleSignIn, handleSignOut } = useContext(AuthContext);

  return { state, handleSignIn, handleSignOut };
}
