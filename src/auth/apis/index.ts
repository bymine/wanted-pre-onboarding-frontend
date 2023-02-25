import api from "../../commons/apis";

export async function postSignIn({ email, password }: any) {
  return await api.post("/auth/signin", { email, password });
}

export async function postSignUp({ email, password }: any) {
  return await api.post("/auth/signup", { email, password });
}
