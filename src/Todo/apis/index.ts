import api from "../../commons/apis";
import { TodoType } from "../types";

export async function getTodo() {
  return await api.get("/todos");
}

export async function postTodo({ todo }: TodoType) {
  return await api.post("/todos", { todo });
}

export async function putTodo({ id, todo, isCompleted }: TodoType) {
  return await api.put(`/todos/${id}`, { todo, isCompleted });
}

export async function deleteTodo({ id }: TodoType) {
  return await api.delete(`/todos/${id}`);
}
