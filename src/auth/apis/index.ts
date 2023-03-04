import api from '../../commons/apis';
import { SignType } from '../hooks/useAuthForm';

export async function postSignIn({ email, password }: SignType) {
  return await api.post('/auth/signin', { email, password });
}

export async function postSignUp({ email, password }: SignType) {
  return await api.post('/auth/signup', { email, password });
}
