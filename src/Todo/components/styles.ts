import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const TodoContainer = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TodoCheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const TodoInput = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  border: 1px solid #d1d1d1;
`;

export const TodoSpan = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  font-size: 13px;
`;

export const TodoOptionBox = styled.div`
  margin-left: 20px;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 10px 0;
  gap: 20px;
`;

export const TodoButton = styled.button`
  min-width: 50px;
  height: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #4070f4;
  color: #fff;
  cursor: pointer;
  &:last-child {
    background: #d93025;
  }
`;
