import React from 'react';
import * as S from './styles';

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
  const isFieldValid =
    typeof errorMessage !== 'undefined' && errorMessage !== ''
      ? 'invalid'
      : undefined;
  const isErrorVisible =
    typeof errorMessage !== 'undefined' && errorMessage !== '';

  return (
    <S.Container>
      <S.FieldBox>
        <S.FieldInput
          name={isFieldValid}
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
