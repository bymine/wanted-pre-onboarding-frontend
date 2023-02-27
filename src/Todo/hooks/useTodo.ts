import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getTodo, postTodo } from "../apis";
import { initState, REDUCER_ACTION_TYPE } from "../reducers/todoReducer";
import { todoReducer } from "../reducers/index";

export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

function useTodo() {
  const navigate = useNavigate();

  const [addTodo, setAddTodo] = useState("");

  const [todos, dispatch] = useReducer(todoReducer, initState);

  function handleAddInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setAddTodo(value);
  }

  const isDisabled = addTodo === "";

  async function getTodos() {
    try {
      var data = await getTodo();
      dispatch({ type: REDUCER_ACTION_TYPE.INIT, init: data.data });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Failed to fetch Todos");
      }
      return [];
    }
  }

  async function createTodo() {
    try {
      const data = await postTodo({ todo: addTodo });
      dispatch({ type: REDUCER_ACTION_TYPE.ADD, payload: data.data });

      setAddTodo("");
      toast.success("Succesed to Create Todo");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Failed to Create Todo");
        signOut();
      }
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    navigate("/signin", { replace: true });
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    addTodo,
    setAddTodo,
    todos,
    dispatch,
    createTodo,
    signOut,
    isDisabled,
    handleAddInput,
  };
}

export default useTodo;
