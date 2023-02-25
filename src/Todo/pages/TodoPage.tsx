import { TodoField } from "../components/index";
import { withAuth } from "../../commons/components/index";
import "./todo.css";
import { useTodo } from "../hooks";

const TodoPage = () => {
  const {
    addTodo,
    todos,
    setTodos,
    createTodo,
    signOut,
    isDisabled,
    handleAddInput,
  } = useTodo();

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
          onChange={handleAddInput}
        />
        <button
          className="new-todo-add-button"
          data-testid="new-todo-add-button"
          onClick={createTodo}
          disabled={isDisabled}
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

export default withAuth(TodoPage);
