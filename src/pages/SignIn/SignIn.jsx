import React, { useEffect, useState } from "react";
import "./signIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputType, setInputType] = useState("password");

  const emailInput = React.createRef();
  const passwordInput = React.createRef();

  useEffect(() => {
    emailInput.current.addEventListener("keyup", (e) => {
      setEmail(e.target.value);
      checkEmail();
    });

    passwordInput.current.addEventListener("keyup", (e) => {
      setPassword(e.target.value);
      checkPassword();
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
    if (!password.match(passwordRegex)) {
      return setPasswordError(true);
    }
    setPasswordError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  return (
    <div className="signin">
      <h1>Sign In</h1>
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
          <div className={`input-field ${passwordError ? "invalid" : null}`}>
            <input
              ref={passwordInput}
              type={inputType}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bx ${
                inputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showPassword}
            ></i>
          </div>
          {passwordError && (
            <span className="error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Please enter at least 8 charatcer</p>
            </span>
          )}
        </div>
        <div className="input-field button">
          <input
            className="input-field button"
            type="submit"
            value="Sign in"
            disabled={
              emailError || passwordError || email === "" || password === ""
            }
          />
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/signup">SignUp</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
