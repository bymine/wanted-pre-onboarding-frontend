import React, { useEffect, useState } from "react";
import "./todo.css";
import withAuth from "../../hoc/withAuth";
import { TodoField } from "../../components/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getTodo, postTodo } from "../../apis/todo/todo";

const Todo = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const getTodos = async () => {
    try {
      var data = await getTodo();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async () => {
    try {
      await postTodo(addTodo).then(() => {
        getTodos();
      });
      setAddTodo("");
      toast.success("Create Todo Successfucl");
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Failed Create Todo");
        signOut();
      }
    }
  };

  function signOut() {
    localStorage.removeItem("token");
    navigate("/signin", { replace: true });
  }

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

      {todos.map((todo) => (
        <TodoField
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isCompleted}
          getTodos={getTodos}
        />
      ))}
    </div>
  );
};

export default withAuth(Todo);
