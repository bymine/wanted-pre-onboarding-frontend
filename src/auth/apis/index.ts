import api from "../../commons/apis";
import { AuthType } from "../types";

export async function postSignIn({ email, password }: AuthType) {
  return await api.post("/auth/signin", { email, password });
}

export async function postSignUp({ email, password }: AuthType) {
  return await api.post("/auth/signup", { email, password });
}
