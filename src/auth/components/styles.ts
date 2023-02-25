import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const FieldBox = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

export const FieldInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  border: 1px solid #d1d1d1;

  ${(props) =>
    props.isValid &&
    css`
      border-color: #d93025;
    `}

  ${(props) =>
    props.button &&
    css`
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      background-color: #4070f4;
      cursor: pointer;
      transition: all 0.3s ease;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: #d1d1d1;
      cursor: unset;
    `}
`;

export const InputIcon = styled.i`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: #919191;
  cursor: pointer;
  padding: 3px;
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: #d93025;
  font-size: 13px;
`;

export const ErrorIcon = styled.i`
  margin-right: 6px;
  font-size: 16px;
`;

export const ErrorSpan = styled.span``;
