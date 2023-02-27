import { TodoField } from "../components/index";
import { withAuth } from "../../commons/components/index";
import { useTodo } from "../hooks";
import * as S from "./styles";

const TodoPage = () => {
  const {
    addTodo,
    todos,
    dispatch,
    createTodo,
    signOut,
    isDisabled,
    handleAddInput,
  } = useTodo();

  return (
    <S.Container>
      <S.HeaderBox>
        <S.HeaderTitle>Todo List</S.HeaderTitle>
        <S.HeaderIcon
          className="bx bx-log-out"
          onClick={signOut}
        ></S.HeaderIcon>
      </S.HeaderBox>

      <S.AddBox>
        <S.AddInput
          data-testid="new-todo-input"
          type="text"
          placeholder="Enter new todo"
          value={addTodo}
          onChange={handleAddInput}
        />
        <S.AddButton
          data-testid="new-todo-add-button"
          onClick={createTodo}
          disabled={isDisabled}
        >
          추가
        </S.AddButton>
      </S.AddBox>

      {todos.todo.map((todo) => (
        <TodoField
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isCompleted}
          dispatch={dispatch}
        />
      ))}
    </S.Container>
  );
};

export default withAuth(TodoPage);