import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 500px;
  min-height: 500px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
`;

export const HeaderBox = styled.div`
  position: relative;
`;

export const HeaderTitle = styled.h1`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
`;

export const HeaderIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;

export const AddBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 30px 0;
  gap: 20px;
`;

export const AddInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  border: 1px solid #d1d1d1;
`;

export const AddButton = styled.button`
  width: 80px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0 15px;
  background: #4070f4;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.disabled &&
    css`
      background: #d1d1d1;
      cursor: unset;
    `}
`;
