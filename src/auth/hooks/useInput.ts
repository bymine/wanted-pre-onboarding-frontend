import React, { useState } from 'react';

type Props = {
  regex: RegExp | string;
  errorMessage: string;
};

export default function useInput({ regex, errorMessage }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function onChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    let isInputValid;

    if (typeof regex === 'string') {
      isInputValid = regex === value;
    } else {
      isInputValid = regex.test(value);
    }
    setInput(value);

    setError(isInputValid ? '' : errorMessage);
  }

  return { input, error, onChange, setError };
}
