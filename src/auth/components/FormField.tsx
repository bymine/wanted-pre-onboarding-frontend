import React from 'react';
import * as S from './styles';

type FormFieldType = {
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
}: FormFieldType) => {
  const buttonProps = type === 'submit' ? 'button' : '';
  const isFieldValid =
    typeof errorMessage !== 'undefined' && errorMessage !== '' && 'invalid';
  const isErrorVisible =
    typeof errorMessage !== 'undefined' && errorMessage !== '';

  return (
    <S.Container>
      <S.FieldBox>
        <S.FieldInput
          isValid={isFieldValid}
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
          <S.ErrorIcon className="bx bx-error-circle error-icon"></S.ErrorIcon>
          <S.ErrorSpan className="error-text">{errorMessage}</S.ErrorSpan>
        </S.ErrorBox>
      )}
    </S.Container>
  );
};

export default FormField;
