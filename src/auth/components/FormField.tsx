import React from 'react';
import * as S from './styles';
import { INPUT_TYPE } from '../../commons/constants';

type Props = {
  testId: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  child?: React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

const FormField = ({
  testId,
  type,
  placeholder,
  onChange,
  errorMessage,
  child,
  value,
  disabled,
}: Props) => {
  const buttonProps = type === INPUT_TYPE.SUBMIT ? 'button' : null;
  const isValid = errorMessage && 'invalid';
  const isErrorVisible = errorMessage !== undefined && errorMessage !== '';

  return (
    <S.Container>
      <S.FieldBox>
        <S.FieldInput
          isValid={isValid}
          button={buttonProps}
          disabled={disabled}
          data-testid={testId}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <S.InputIcon>{child}</S.InputIcon>
      </S.FieldBox>
      {isErrorVisible && (
        <S.ErrorBox>
          <S.ErrorIcon className="bx bx-error-circle"></S.ErrorIcon>
          <S.ErrorSpan>{errorMessage}</S.ErrorSpan>
        </S.ErrorBox>
      )}
    </S.Container>
  );
};

export default FormField;
