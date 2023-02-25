import { TodoField } from "../components/index";
import { withAuth } from "../../commons/components/index";
import { useTodo } from "../hooks";
import * as S from "./styles";

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

      {todos.map((todo: { id: number; todo: string; isCompleted: boolean }) => (
        <TodoField
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isCompleted}
          setTodos={setTodos}
        />
      ))}
    </S.Container>
  );
};

export default withAuth(TodoPage);
