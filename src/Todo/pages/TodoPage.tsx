import { TodoField } from '../components/index';
import { withAuth } from '../../commons/components/index';
import * as S from './styles';
import useTodoManager from '../hooks/useTodoManager';
import { INPUT_TYPE, PLACEHOLDER, TEST_ID } from '../../commons/constants';

const TodoPage = () => {
  const {
    addTodo,
    todoList,
    createTodo,
    removeTodo,
    signOut,
    isDisabled,
    handleAddInput,
    updateTodo,
  } = useTodoManager();

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
          data-testid={TEST_ID.NEW_TODO_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.ADD_NEW_TODO}
          value={addTodo}
          onChange={handleAddInput}
        />
        <S.AddButton
          data-testid={TEST_ID.NEW_TODO_ADD_BUTTON}
          onClick={createTodo}
          disabled={isDisabled}
        >
          추가
        </S.AddButton>
      </S.AddBox>

      {todoList.map((todo) => (
        <TodoField
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isCompleted}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </S.Container>
  );
};

export default withAuth(TodoPage);
