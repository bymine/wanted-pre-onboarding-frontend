export type TodoType = {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
};

export type TodoStateType = { todo: TodoType[] };

export type TodoFieldType = {
  id: number;
  todo: string;
  isChecked: boolean;
  updateTodo: ({ id, todo, isCompleted }: TodoType) => Promise<void>;
  removeTodo: ({ id, todo, isCompleted }: TodoType) => Promise<void>;
};

export type TodoReducerAction = {
  type: string;
  payload?: TodoType;
  init?: TodoType[];
};
