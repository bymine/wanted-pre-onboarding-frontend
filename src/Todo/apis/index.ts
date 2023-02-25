import api from "../../commons/apis";

export type TodoPropsType = {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
};

export async function getTodo() {
  return await api.get("/todos");
}

export async function postTodo({ todo }: TodoPropsType) {
  return await api.post("/todos", { todo });
}

export async function putTodo({ id, todo, isCompleted }: TodoPropsType) {
  return await api.put(`/todos/${id}`, { todo, isCompleted });
}

export async function deleteTodo({ id }: TodoPropsType) {
  return await api.delete(`/todos/${id}`);
}
