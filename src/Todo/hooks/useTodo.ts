import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getTodo, postTodo } from "../apis";

export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

function useTodo() {
  const navigate = useNavigate();

  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  function handleAddInput({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setAddTodo(value);
  }

  const isDisabled = addTodo === "";

  async function getTodos() {
    try {
      var data = await getTodo();
      setTodos(data.data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Failed to fetch Todos");
      }
    }
  }

  async function createTodo() {
    try {
      const data = await postTodo({ todo: addTodo });
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: data.data.id, todo: data.data.todo, isCompleted: false },
      ]);

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
    setTodos,
    createTodo,
    signOut,
    isDisabled,
    handleAddInput,
  };
}

export default useTodo;
