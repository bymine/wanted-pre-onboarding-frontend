import { useEffect, useReducer, useState } from 'react';
import { useAuth } from '../../auth/hooks';
import { deleteTodo, getTodo, postTodo, putTodo } from '../apis';
import { initState, TODO_REDUCER_ACTION_TYPE } from '../constants';
import { todoReducer } from '../reducers/index';
import { TodoType } from '../types';

function useTodo() {
  const [addTodo, setAddTodo] = useState('');

  const [todos, dispatch] = useReducer(todoReducer, initState);

  const { handleSignOut } = useAuth();

  function handleAddInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setAddTodo(value);
  }

  const isDisabled = addTodo === '';

  async function getTodos() {
    try {
      const data = await getTodo();
      dispatch({ type: TODO_REDUCER_ACTION_TYPE.INIT, init: data.data });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to load todo data');
      }
      return [];
    }
  }

  async function createTodo() {
    try {
      const data = await postTodo({ todo: addTodo });
      dispatch({ type: TODO_REDUCER_ACTION_TYPE.ADD, payload: data.data });

      setAddTodo('');
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to create todo data');
      }
    }
  }

  async function updateTodo({ id, todo, isCompleted }: TodoType) {
    try {
      const data = await putTodo({ id, todo: todo, isCompleted });
      dispatch({ type: TODO_REDUCER_ACTION_TYPE.UPDATE, payload: data.data });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to update todo data');
      }
    }
  }

  async function removeTodo({ id, todo, isCompleted }: TodoType) {
    try {
      await deleteTodo({ id, todo, isCompleted });
      dispatch({
        type: TODO_REDUCER_ACTION_TYPE.DELETE,
        payload: { id, todo, isCompleted },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to delete todo data');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    handleSignOut();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    addTodo,
    setAddTodo,
    todos,
    createTodo,
    removeTodo,
    signOut,
    isDisabled,
    handleAddInput,
    updateTodo,
  };
}

export default useTodo;
