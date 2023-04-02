import api from '../../commons/apis';
import { AUTH_API_URL } from '../../commons/constants';

export type SignType = {
  email: string;
  password: string;
};

export async function postSignIn({ email, password }: SignType) {
  return await api.post(`${AUTH_API_URL.SIGNIN}`, { email, password });
}

export async function postSignUp({ email, password }: SignType) {
  return await api.post(`${AUTH_API_URL.SIGNUP}`, { email, password });
}
