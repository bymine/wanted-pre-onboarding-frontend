import { useContext } from 'react';
import TodoContext, { UseTodoContextType } from '../contexts/TodoProvider';

function useTodo(): UseTodoContextType {
  return useContext(TodoContext);
}

export default useTodo;
