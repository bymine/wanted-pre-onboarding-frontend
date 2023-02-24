import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components/index";
import { toast } from "react-toastify";
import { postSignUp } from "../apis";
import { AxiosError } from "axios";
import { withAuth } from "../../commons/components/index";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [createPwError, setCreatePwError] = useState("");
  const [confirmPwError, setConfirmPwError] = useState("");

  const [createPwType, setCreatePwType] = useState("password");
  const [confirmPwType, setConfirmPwType] = useState("password");

  const formIsValid =
    emailError === "" &&
    createPwError === "" &&
    confirmPwError === "" &&
    email !== "" &&
    createPassword !== "" &&
    confirmPassword !== "";

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    const emailRegex = /@/;
    const isEmailValid = emailRegex.test(e.target.value);

    setEmail(e.target.value);

    if (isEmailValid) setEmailError("");
    else setEmailError("Please enter a valid email");
  }

  function handleCreatePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    const isCreatePasswordValid = e.target.value.length >= 8;

    setCreatePassword(e.target.value);

    if (isCreatePasswordValid) setCreatePwError("");
    else setCreatePwError("Please enter at least 8 charatcer");
  }

  function handleConfirmPasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    const isConfirmPasswordValid = e.target.value === createPassword;

    setConfirmPassword(e.target.value);

    if (isConfirmPasswordValid) setConfirmPwError("");
    else setConfirmPwError("Please don't match");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postSignUp({ email, password: createPassword });
      toast.success("Sign Up Succesful");
      navigateSignIn();
    } catch (error) {
      if (error instanceof AxiosError) {
        setEmailError("The same email already exists.");
      }
    }
  };

  function onClickCreatePw() {
    setCreatePwType(createPwType === "text" ? "password" : "text");
  }

  function onClickConfirmPw() {
    setConfirmPwType(confirmPwType === "text" ? "password" : "text");
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
          onChange={handleEmailInput}
          errorMessage={emailError}
        />
        <FormField
          testId="password-input"
          type={createPwType}
          placeholder="Enter your Create Password"
          onChange={handleCreatePasswordInput}
          errorMessage={createPwError}
          child={
            <i
              className={`bx ${
                createPwType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={onClickCreatePw}
            />
          }
        />
        <FormField
          testId="repassword-input"
          type={confirmPwType}
          placeholder="Enter your Confirm Password"
          onChange={handleConfirmPasswordInput}
          errorMessage={confirmPwError}
          child={
            <i
              className={`bx ${
                confirmPwType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={onClickConfirmPw}
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

export default withAuth(SignUp);
