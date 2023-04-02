import React, { useState } from 'react';
import { TodoType } from '../contexts/TodoProvider';
import * as S from './styles';
import {
  BUTTON_NAME,
  CONFIRM_MESSAGE,
  INPUT_TYPE,
  TEST_ID,
} from '../../commons/constants';

export type Props = {
  id: number;
  todo: string;
  isChecked: boolean;
  updateTodo: ({ id, todo, isCompleted }: TodoType) => Promise<void>;
  removeTodo: ({ id, todo, isCompleted }: TodoType) => Promise<void>;
};

const TodoField = ({ id, todo, isChecked, updateTodo, removeTodo }: Props) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [isEditMode, setIsEditMode] = useState(false);

  function onHandleSubmit() {
    const isUserAgree =
      isEditMode && window.confirm(CONFIRM_MESSAGE.UPDATE_CONFIRM_MESSAGE);

    if (isUserAgree) updateTodo({ id, todo: editTodo, isCompleted });

    setIsEditMode(!isEditMode);
  }

  function onHandleDelte() {
    const isUserAgree =
      !isEditMode && window.confirm(CONFIRM_MESSAGE.DELETE_CONFIRM_MESSAGE);

    if (isUserAgree) removeTodo({ id, todo: editTodo, isCompleted });
    else setIsEditMode(!isEditMode);
  }

  return (
    <S.Container>
      <S.TodoContainer>
        <S.TodoCheckBox
          type={INPUT_TYPE.CHECKBOX}
          checked={isCompleted}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsCompleted(e.target.checked)
          }
        />
        {isEditMode ? (
          <S.TodoInput
            data-testid={TEST_ID.MODIFY_BUTTON}
            type={INPUT_TYPE.TEXT}
            defaultValue={todo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditTodo(e.target.value)
            }
          />
        ) : (
          <S.TodoSpan>{todo}</S.TodoSpan>
        )}
      </S.TodoContainer>
      <S.TodoOptionBox>
        <S.TodoButton
          data-testid={
            isEditMode ? TEST_ID.SUBMIT_BUTTON : TEST_ID.MODIFY_BUTTON
          }
          onClick={onHandleSubmit}
        >
          {isEditMode ? BUTTON_NAME.SUBMIT : BUTTON_NAME.EDIT}
        </S.TodoButton>
        <S.TodoButton
          data-testid={
            isEditMode ? TEST_ID.CANCEL_BUTTON : TEST_ID.DELETE_BUTTON
          }
          onClick={onHandleDelte}
        >
          {isEditMode ? BUTTON_NAME.CANCEL : BUTTON_NAME.DELETE}
        </S.TodoButton>
      </S.TodoOptionBox>
    </S.Container>
  );
};

export default TodoField;
