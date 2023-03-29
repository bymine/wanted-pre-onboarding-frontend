import api from '../../commons/apis';

export type SignType = {
  email: string;
  password: string;
};

export async function postSignIn({ email, password }: SignType) {
  return await api.post('/auth/signin', { email, password });
}

export async function postSignUp({ email, password }: SignType) {
  return await api.post('/auth/signup', { email, password });
}
