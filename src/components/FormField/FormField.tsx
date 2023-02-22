import React, { RefObject, useEffect } from "react";
import "./formField.css";

type FormFieldType = {
  testId: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  child?: React.ReactElement;
  validator?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

const FormField = ({
  testId,
  type,
  placeholder,
  onChange,
  validator,
  errorMessage,
  child,
  value,
  disabled,
}: FormFieldType) => {
  const inputRef: RefObject<HTMLInputElement> = React.createRef();
  useEffect(() => {
    inputRef.current!.addEventListener("keyup", () => {
      validator!();
    });
  });
  return (
    <div className="field">
      <div
        className={`input-field ${type === "submit" && "button"} ${
          typeof errorMessage !== "undefined" &&
          errorMessage !== "" &&
          "invalid"
        }`}
      >
        <input
          data-testid={testId}
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        {child}
      </div>
      {typeof errorMessage !== "undefined" && errorMessage !== "" && (
        <span className="error">
          <i className="bx bx-error-circle error-icon"></i>
          <p className="error-text">{errorMessage}</p>
        </span>
      )}
    </div>
  );
};

export default FormField;
