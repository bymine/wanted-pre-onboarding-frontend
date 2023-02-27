import React, { useState } from "react";
import { deleteTodo, putTodo } from "../apis";
import { toast } from "react-toastify";
import * as S from "./styles";
import { ReducerAction, REDUCER_ACTION_TYPE } from "../reducers/todoReducer";

type TodoFieldType = {
  id: number;
  todo: string;
  isChecked: boolean;
  dispatch: React.Dispatch<ReducerAction>;
};

const TodoField = ({ id, todo, isChecked, dispatch }: TodoFieldType) => {
  const [editTodo, setEditTodo] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(isChecked);
  const [isEditMode, setIsEditMode] = useState(false);

  async function onHandleSubmit() {
    if (isEditMode) {
      const isUserAgree = window.confirm("Are you sure you want to edit todo?");
      if (isUserAgree) {
        try {
          var data = await putTodo({ id, todo: editTodo, isCompleted });
          dispatch({ type: REDUCER_ACTION_TYPE.UPDATE, payload: data.data });
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
          dispatch({
            type: REDUCER_ACTION_TYPE.DELETE,
            payload: { id, todo, isCompleted },
          });
          toast.success("Succesed to Delete Todo");
        } catch (error) {
          if (error instanceof Error) {
            toast.error("Failed to Delete Todo");
          }
        }
    }
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
          data-testid={isEditMode ? "submit-button" : "modify-button"}
          onClick={onHandleSubmit}
        >
          {isEditMode ? "제출" : "수정"}
        </S.TodoButton>
        <S.TodoButton
          data-testid={isEditMode ? "cancel-button" : "delete-button"}
          onClick={onHandleDelte}
        >
          {isEditMode ? "취소" : "삭제"}
        </S.TodoButton>
      </S.TodoOptionBox>
    </S.Container>
  );
};

export default TodoField;
