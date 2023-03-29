import { useState } from 'react';
import { INPUT_TYPE } from '../constants';

export default function usePasswordIcon() {
  const [inputType, setInputType] = useState(INPUT_TYPE.PASSWORD);
  const icon = `bx ${inputType === INPUT_TYPE.TEXT ? 'bx-show' : 'bx-hide'} `;
  function onClick() {
    setInputType(
      inputType === INPUT_TYPE.TEXT ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT,
    );
  }
  return { inputType, icon, onClick };
}
