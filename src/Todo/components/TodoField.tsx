import React, { useState } from 'react';
import { TodoFieldType } from '../types';
import * as S from './styles';

const TodoField = ({
  id,
  todo,
  isChecked,
  updateTodo,
  removeTodo,
}: TodoFieldType) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [isEditMode, setIsEditMode] = useState(false);

  function onHandleSubmit() {
    const isUserAgree =
      isEditMode && window.confirm('Are you sure you want to edit todo?');

    if (isUserAgree) updateTodo({ id, todo: editTodo, isCompleted });

    setIsEditMode(!isEditMode);
  }

  function onHandleDelte() {
    const isUserAgree =
      !isEditMode && window.confirm('Are you sure you want to delete todo?');

    if (isUserAgree) removeTodo({ id, todo: editTodo, isCompleted });
    else setIsEditMode(!isEditMode);
  }

  return (
    <S.Container>
      <S.TodoContainer>
        <S.TodoCheckBox
          type="checkbox"
          checked={isCompleted}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsCompleted(e.target.checked)
          }
        />
        {isEditMode ? (
          <S.TodoInput
            data-testid="modify-input"
            type="text"
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
          data-testid={isEditMode ? 'submit-button' : 'modify-button'}
          onClick={onHandleSubmit}
        >
          {isEditMode ? '제출' : '수정'}
        </S.TodoButton>
        <S.TodoButton
          data-testid={isEditMode ? 'cancel-button' : 'delete-button'}
          onClick={onHandleDelte}
        >
          {isEditMode ? '취소' : '삭제'}
        </S.TodoButton>
      </S.TodoOptionBox>
    </S.Container>
  );
};

export default TodoField;
