import React, { useState } from "react";
import "./todoField.css";
import { deleteTodo, putTodo } from "../apis";
import { toast } from "react-toastify";
import { TodoType } from "../pages/Todo";

type TodoFieldType = {
  id: number;
  todo: string;
  isChecked: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const TodoField = ({ id, todo, isChecked, setTodos }: TodoFieldType) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [isEditMode, setIsEditMode] = useState(false);

  async function onHandleSubmit() {
    if (isEditMode) {
      const isUserAgree = window.confirm("Are you sure you want to edit todo?");
      if (isUserAgree) {
        try {
          var data = await putTodo({ id, todo: editTodo, isCompleted });
          setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === data.data.id ? data.data : todo
            )
          );
          setIsEditMode(!isEditMode);
          toast.success("Succesed to Edit Todo");
        } catch (error) {
          if (error instanceof Error) {
            toast.error("Failed to Edit Todo");
          }
        }
      }
    } else setIsEditMode(!isEditMode);
  }

  async function onHandleDelte() {
    if (isEditMode) setIsEditMode(!isEditMode);
    else {
      const isUserAgree = window.confirm(
        "Are you sure you want to delete todo?"
      );
      if (isUserAgree)
        try {
          await deleteTodo({ id });
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          toast.success("Succesed to Delete Todo");
        } catch (error) {
          if (error instanceof Error) {
            toast.error("Failed to Delete Todo");
          }
        }
    }
  }

  return (
    <li className="todo-content-field">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          className="todo-checkbox"
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        {isEditMode ? (
          <input
            data-testid="modify-input"
            type="text"
            className="edit-todo-input"
            defaultValue={todo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      <div className="todo-options">
        <button
          data-testid={isEditMode ? "submit-button" : "modify-button"}
          onClick={onHandleSubmit}
        >
          {isEditMode ? "제출" : "수정"}
        </button>
        <button
          data-testid={isEditMode ? "cancel-button" : "delete-button"}
          onClick={onHandleDelte}
        >
          {isEditMode ? "취소" : "삭제"}
        </button>
      </div>
    </li>
  );
};

export default TodoField;
