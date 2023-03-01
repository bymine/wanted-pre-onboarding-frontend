import { TODO_REDUCER_ACTION_TYPE } from "../constants";
import { TodoReducerAction, TodoStateType, TodoType } from "../types";

export default function todoReducer(
  state: TodoStateType,
  action: TodoReducerAction
): TodoStateType {
  switch (action.type) {
    case TODO_REDUCER_ACTION_TYPE.INIT: {
      const loadedTodos = action.init ?? [];
      return { ...state, todo: loadedTodos };
    }

    case TODO_REDUCER_ACTION_TYPE.ADD: {
      const { id, todo, isCompleted } = action.payload!;
      return { ...state, todo: [...state.todo, { id, todo, isCompleted }] };
    }

    case TODO_REDUCER_ACTION_TYPE.DELETE: {
      const { id } = action.payload!;
      const filterdTodo: TodoType[] = state.todo.filter(
        (todo) => todo.id !== id
      );
      return { ...state, todo: [...filterdTodo] };
    }

    case TODO_REDUCER_ACTION_TYPE.UPDATE: {
      const { id, todo, isCompleted } = action.payload!;
      const filterdTodo: TodoType[] = state.todo.map((element) =>
        element.id === id ? { id, todo, isCompleted } : element
      );
      return { ...state, todo: [...filterdTodo] };
    }

    default:
      throw new Error("reducer action error");
  }
}
