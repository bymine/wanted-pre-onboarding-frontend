import axios from "axios";

const baseUrl = "http://localhost:8000/todos";

export type TodoPropsType = {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
};

const setHeaders = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};

export const getTodo = async () => {
  try {
    const response = await axios.get(`${baseUrl}`, setHeaders());
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postTodo = async ({ todo }: TodoPropsType) => {
  try {
    const response = await axios.post(`${baseUrl}`, { todo }, setHeaders());
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putTodo = async ({ id, todo, isCompleted }: TodoPropsType) => {
  try {
    const response = await axios.put(
      `${baseUrl}/${id}`,
      { todo, isCompleted },
      setHeaders()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteTodo = async ({ id }: TodoPropsType) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, setHeaders());
    return response.data;
  } catch (error) {
    throw error;
  }
};