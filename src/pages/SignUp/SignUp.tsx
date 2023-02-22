import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { FormField } from "../../components/index";
import { toast } from "react-toastify";
import { postSignUp } from "../../apis/auth/auth";
import { AxiosError } from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [createPasswordErrorMessage, setCreatePasswordErrorMessage] =
    useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const [createPasswordInputType, setCreatePasswordInputType] =
    useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");

  const formIsValid =
    emailErrorMessage === "" &&
    createPasswordErrorMessage === "" &&
    confirmPasswordErrorMessage === "" &&
    email !== "" &&
    createPassword !== "" &&
    confirmPassword !== "";

  function checkEmail() {
    const emailRegex = /^[^ ]+@[^ ]+[a-z]/;
    if (!email.match(emailRegex)) {
      return setEmailErrorMessage("Please enter a valid email");
    }
    setEmailErrorMessage("");
  }

  function checkCreatePassword() {
    const passwordRegex = /[^ ]{8,}/;

    if (confirmPassword !== "") {
      checkConfirmPassword();
    }
    if (!createPassword.match(passwordRegex)) {
      return setCreatePasswordErrorMessage(
        "Please enter at least 8 characters"
      );
    }
    setCreatePasswordErrorMessage("");
  }

  function checkConfirmPassword() {
    if (createPassword !== confirmPassword) {
      return setConfirmPasswordErrorMessage("Please don't match");
    }
    setConfirmPasswordErrorMessage("");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postSignUp({ email, password: createPassword });
      toast.success("Sign Up Succesful");
      navigateSignIn();
    } catch (error) {
      if (error instanceof AxiosError) {
        setEmailErrorMessage("The same email already exists.");
      }
    }
  };

  function showPassword() {
    setCreatePasswordInputType(
      createPasswordInputType === "text" ? "password" : "text"
    );
  }

  function showConfirmPassword() {
    setConfirmPasswordInputType(
      confirmPasswordInputType === "text" ? "password" : "text"
    );
  }

  function navigateSignIn() {
    navigate("/signin", { replace: true });
  }

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          testId="email-input"
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          validator={checkEmail}
          errorMessage={emailErrorMessage}
        />
        <FormField
          testId="password-input"
          type={createPasswordInputType}
          placeholder="Enter your Create Password"
          onChange={(e) => setCreatePassword(e.target.value)}
          validator={checkCreatePassword}
          errorMessage={createPasswordErrorMessage}
          child={
            <i
              className={`bx ${
                createPasswordInputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showPassword}
            />
          }
        />
        <FormField
          testId="repassword-input"
          type={confirmPasswordInputType}
          placeholder="Enter your Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          validator={checkConfirmPassword}
          errorMessage={confirmPasswordErrorMessage}
          child={
            <i
              className={`bx ${
                confirmPasswordInputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showConfirmPassword}
            />
          }
        />
        <FormField
          testId="signup-button"
          type="submit"
          value="Sign up"
          disabled={!formIsValid}
        />

        <p className="signin-link">
          Already have an account? <span onClick={navigateSignIn}>Signin</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;