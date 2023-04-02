import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks';
import { deleteTodo, getTodo, postTodo, putTodo } from '../apis';
import { TodoType } from '../contexts/TodoProvider';
import useTodo from './useTodo';
import { localTokenRepository } from '../..';

function useTodoManager() {
  const [addTodo, setAddTodo] = useState('');

  const {
    dispatch,
    TODO_REDUCER_ACTIONS,
    state: { todoList },
  } = useTodo();

  const { dispatch: authDisPatch, AUTH_REDUCER_ACTIONS } = useAuth();

  const isDisabled = addTodo === '';

  function handleAddInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setAddTodo(value);
  }

  async function createTodo() {
    try {
      const data = await postTodo({ id: 0, todo: addTodo, isCompleted: false });
      dispatch({ type: TODO_REDUCER_ACTIONS.ADD, payload: data.data });

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
      dispatch({ type: TODO_REDUCER_ACTIONS.UPDATE, payload: data.data });
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
        type: TODO_REDUCER_ACTIONS.DELETE,
        payload: { id, todo, isCompleted },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to delete todo data');
      }
    }
  }

  function signOut() {
    localTokenRepository.remove();
    authDisPatch({
      type: AUTH_REDUCER_ACTIONS.SIGNOUT,
    });
  }

  useEffect(() => {
    const loadTodo = async function () {
      try {
        const data = await getTodo();
        dispatch({ type: TODO_REDUCER_ACTIONS.INIT, init: data.data });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error('Failed to load todo data');
        }
        return [];
      }
    };
    loadTodo();
  }, []);

  return {
    addTodo,
    setAddTodo,
    todoList,
    createTodo,
    removeTodo,
    signOut,
    isDisabled,
    handleAddInput,
    updateTodo,
  };
}

export default useTodoManager;
