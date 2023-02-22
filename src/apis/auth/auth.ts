import axios from "axios";

const baseUrl = "http://localhost:8000/auth";

export const postSignIn = async ({ email, password }: any) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postSignUp = async ({ email, password }: any) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
