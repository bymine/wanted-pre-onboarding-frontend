import React, { useState } from "react";
import "./todoField.css";
import PropTypes from "prop-types";
import { deleteTodo, putTodo } from "../../apis/todo/todo";

const TodoField = ({ id, todo, isChecked, getTodos }) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async () => {
    if (editMode) {
      try {
        await putTodo(id, editTodo, isCompleted).then(() => {
          getTodos();
        });
        setEditMode(!editMode);
      } catch (error) {}
    } else {
      setEditMode(!editMode);
    }
  };

  const handleDelte = async () => {
    if (editMode) {
      setEditMode(!editMode);
    } else {
      try {
        await deleteTodo(id).then(() => {
          getTodos();
        });
      } catch (error) {}
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
          onClick={handleSubmit}
        >
          {editMode ? "제출" : "수정"}
        </button>
        <button
          data-testid={editMode ? "cancel-button" : "delete-button"}
          onClick={handleDelte}
        >
          {editMode ? "취소" : "삭제"}
        </button>
      </div>
    </li>
  );
};

export default TodoField;

TodoField.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  getTodos: PropTypes.func.isRequired,
};
