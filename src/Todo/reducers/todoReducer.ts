export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type TodoStateType = { todo: TodoType[] };

export const initState: TodoStateType = { todo: [] };

export const REDUCER_ACTION_TYPE = {
  INIT: "INIT",
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: TodoType;
  init?: TodoType[];
};

export default function todoReducer(
  state: TodoStateType,
  action: ReducerAction
): TodoStateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INIT: {
      const loadedTodos = action.init ?? [];
      return { ...state, todo: loadedTodos };
    }

    case REDUCER_ACTION_TYPE.ADD: {
      const { id, todo, isCompleted } = action.payload!;
      return { ...state, todo: [...state.todo, { id, todo, isCompleted }] };
    }

    case REDUCER_ACTION_TYPE.DELETE: {
      const { id } = action.payload!;
      const filterdTodo: TodoType[] = state.todo.filter(
        (todo) => todo.id !== id
      );

      return { ...state, todo: [...filterdTodo] };
    }

    case REDUCER_ACTION_TYPE.UPDATE: {
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
