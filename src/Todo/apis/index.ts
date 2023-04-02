import api from '../../commons/apis';
import { TODO_API_URL } from '../../commons/constants';
import { TodoType } from '../contexts/TodoProvider';

export async function getTodo() {
  return await api.get(`${TODO_API_URL}`);
}

export async function postTodo({ todo }: TodoType) {
  return await api.post(`${TODO_API_URL}`, { todo });
}

export async function putTodo({ id, todo, isCompleted }: TodoType) {
  return await api.put(`${TODO_API_URL}${id}`, { todo, isCompleted });
}

export async function deleteTodo({ id }: TodoType) {
  return await api.delete(`${TODO_API_URL}${id}`);
}
