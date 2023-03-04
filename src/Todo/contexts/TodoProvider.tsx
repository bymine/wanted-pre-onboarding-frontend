import { createContext, ReactElement, useReducer } from 'react';

export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

type TodoStateType = { todoList: TodoType[] };

const initTodoState: TodoStateType = { todoList: [] };

const REDUCER_ACTION_TYPE = {
  INIT: 'INIT',
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

type TodoReducerAction = {
  type: string;
  payload?: TodoType;
  init?: TodoType[];
};

function reducer(
  state: TodoStateType,
  action: TodoReducerAction,
): TodoStateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INIT: {
      const loadedTodos = action.init ?? [];
      return { ...state, todoList: loadedTodos };
    }

    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload)
        throw new Error('action payload missing in Add action');

      const { id, todo, isCompleted } = action.payload;

      return {
        ...state,
        todoList: [{ id, todo, isCompleted }, ...state.todoList],
      };
    }

    case REDUCER_ACTION_TYPE.DELETE: {
      if (!action.payload)
        throw new Error('action payload missing in Delete action');

      const { id } = action.payload;

      const filterdTodo: TodoType[] = state.todoList.filter(
        (todo) => todo.id !== id,
      );
      return { ...state, todoList: [...filterdTodo] };
    }

    case REDUCER_ACTION_TYPE.UPDATE: {
      if (!action.payload)
        throw new Error('action payload missing in Update action');

      const { id, todo, isCompleted } = action.payload;

      const todoExists: TodoType | undefined = state.todoList.find(
        (todo) => todo.id === id,
      );

      if (!todoExists) {
        throw new Error('Todo must exist in list to update todo');
      }

      const updateTodo: TodoType = { ...todoExists, todo, isCompleted };

      const filterdTodo: TodoType[] = state.todoList.filter(
        (todo) => todo.id !== id,
      );

      return { ...state, todoList: [updateTodo, ...filterdTodo] };
    }

    default:
      throw new Error('reducer action error');
  }
}

const useTodoContext = (initTodoState: TodoStateType) => {
  const [state, dispatch] = useReducer(reducer, initTodoState);

  const TODO_REDUCER_ACTIONS = REDUCER_ACTION_TYPE;

  return { dispatch, TODO_REDUCER_ACTIONS, state };
};

export type UseTodoContextType = ReturnType<typeof useTodoContext>;

const initTodoContextState: UseTodoContextType = {
  dispatch: () => {
    return;
  },
  TODO_REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  state: { todoList: [] },
};

export const TodoContext =
  createContext<UseTodoContextType>(initTodoContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const TodoProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <TodoContext.Provider value={useTodoContext(initTodoState)}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
