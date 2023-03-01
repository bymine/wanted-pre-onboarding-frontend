import { TodoStateType } from "../types";

export const TODO_REDUCER_ACTION_TYPE = {
  INIT: "INIT",
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const initState: TodoStateType = { todo: [] };
