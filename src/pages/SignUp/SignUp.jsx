import React, { useEffect, useState } from "react";
import "./signUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [createPasswordError, setCreatePasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [createInputType, setCreateInputType] = useState("password");
  const [confirmInputType, setConfirmInputType] = useState("password");

  const emailInput = React.createRef();
  const createPasswordInput = React.createRef();
  const confirmPasswordInput = React.createRef();

  useEffect(() => {
    emailInput.current.addEventListener("keyup", (e) => {
      setEmail(e.target.value);
      checkEmail();
    });

    createPasswordInput.current.addEventListener("keyup", (e) => {
      setCreatePassword(e.target.value);
      checkPassword();
      if (confirmPassword !== "") {
        checkConfirmPassword();
      }
    });

    confirmPasswordInput.current.addEventListener("keyup", (e) => {
      setConfirmPassword(e.target.value);
      checkConfirmPassword();
    });
  });

  function checkEmail() {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]/;
    if (!email.match(emailRegex)) {
      return setEmailError(true);
    }
    setEmailError(false);
  }

  function checkPassword() {
    const passwordRegex = /[^ ]{8,}/;
    if (!createPassword.match(passwordRegex)) {
      return setCreatePasswordError(true);
    }
    setCreatePasswordError(false);
  }

  function checkConfirmPassword() {
    if (createPassword !== confirmPassword) {
      return setConfirmPasswordError(true);
    }
    setConfirmPasswordError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function showPassword() {
    setCreateInputType(createInputType === "text" ? "password" : "text");
  }

  function showConfrimPassword() {
    setConfirmInputType(confirmInputType === "text" ? "password" : "text");
  }

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className={`input-field ${emailError ? "invalid" : null}`}>
            <input
              ref={emailInput}
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && (
            <span className="error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Please enter a valid email</p>
            </span>
          )}
        </div>
        <div className="field">
          <div
            className={`input-field ${createPasswordError ? "invalid" : null}`}
          >
            <input
              ref={createPasswordInput}
              type={createInputType}
              placeholder="Enter your Create Password"
              onChange={(e) => setCreatePassword(e.target.value)}
            />
            <i
              className={`bx ${
                createInputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showPassword}
            ></i>
          </div>
          {createPasswordError && (
            <span className="error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Please enter at least 8 charatcer</p>
            </span>
          )}
        </div>
        <div className="field">
          <div
            className={`input-field ${confirmPasswordError ? "invalid" : null}`}
          >
            <input
              ref={confirmPasswordInput}
              type={confirmInputType}
              placeholder="Enter your Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              className={`bx ${
                confirmInputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showConfrimPassword}
            ></i>
          </div>
          {confirmPasswordError && (
            <span className="error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Please don't match</p>
            </span>
          )}
        </div>
        <div className="input-field button">
          <input
            className="input-field button"
            type="submit"
            value="Sign Up"
            disabled={
              emailError ||
              createPasswordError ||
              confirmPasswordError ||
              email === "" ||
              createPassword === "" ||
              confirmPassword === ""
            }
          />
        </div>

        <p className="signin-link">
          Already have an account? <a href="/signin">Signin</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
