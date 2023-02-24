import React, { useEffect, useState } from "react";
import { TodoField } from "../components/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getTodo, postTodo } from "../apis/index";
import { withAuth } from "../../commons/components/index";
import "./todo.css";

export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

const Todo = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();

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

  return (
    <div className="todo">
      <div className="todo-header">
        <h1>Todo List</h1>
        <i className="bx bx-log-out" onClick={signOut}></i>
      </div>

      <div className="add-todo-field">
        <input
          className="new-todo-input"
          data-testid="new-todo-input"
          type="text"
          placeholder="Enter new todo"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button
          className="new-todo-add-button"
          data-testid="new-todo-add-button"
          onClick={createTodo}
          disabled={addTodo === ""}
        >
          추가
        </button>
      </div>

      {todos.map((todo: { id: number; todo: string; isCompleted: boolean }) => (
        <TodoField
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isCompleted}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default withAuth(Todo);
