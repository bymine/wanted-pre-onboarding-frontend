import React, { useState } from "react";
import "./todoField.css";
import { deleteTodo, putTodo } from "../../apis/todo/todo";
import { toast } from "react-toastify";

type TodoFieldType = {
  id: number;
  todo: string;
  isChecked: boolean;
  getTodos: () => void;
};

const TodoField = ({ id, todo, isChecked, getTodos }: TodoFieldType) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [editMode, setEditMode] = useState(false);

  const onHandleSubmit = async () => {
    if (editMode) {
      if (window.confirm("Are you sure you want to edit todo?")) {
        try {
          await putTodo({ id, todo: editTodo, isCompleted }).then(() => {
            getTodos();
          });
          setEditMode(!editMode);
          toast.success("Succesed to Edit Todo");
        } catch (error) {
          if (error instanceof Error) {
            toast.error("Failed to Edit Todo");
          }
        }
      }
    } else {
      setEditMode(!editMode);
    }
  };

  const onHandleDelte = async () => {
    if (editMode) {
      setEditMode(!editMode);
    } else {
      if (window.confirm("Are you sure you want to delete todo?")) {
        try {
          await deleteTodo({ id }).then(() => {
            getTodos();
          });
          toast.success("Succesed to Delete Todo");
        } catch (error) {
          if (error instanceof Error) {
            toast.error("Failed to Delete Todo");
          }
        }
      }
    }
  };

  return (
    <li className="todo-content-field">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          className="todo-checkbox"
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        {editMode ? (
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
          data-testid={editMode ? "submit-button" : "modify-button"}
          onClick={onHandleSubmit}
        >
          {editMode ? "제출" : "수정"}
        </button>
        <button
          data-testid={editMode ? "cancel-button" : "delete-button"}
          onClick={onHandleDelte}
        >
          {editMode ? "취소" : "삭제"}
        </button>
      </div>
    </li>
  );
};

export default TodoField;
