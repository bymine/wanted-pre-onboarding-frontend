import React, { useState } from "react";
import { FormField } from "../components/index";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../../commons/components/index";
import { toast } from "react-toastify";
import { postSignIn } from "../apis";
import { AxiosError } from "axios";
import "./signIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");

  const [pwType, setPwType] = useState("password");

  const formIsValid =
    email !== "" && password !== "" && emailError === "" && pwError === "";

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    const emailRegex = /@/;
    const isEmailValid = emailRegex.test(e.target.value);

    setEmail(e.target.value);

    if (isEmailValid) setEmailError("");
    else setEmailError("Please enter a valid email");
  }

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    const isPasswordValid = e.target.value.length >= 8;

    setPassword(e.target.value);

    if (isPasswordValid) setPwError("");
    else setPwError("Please enter at least 8 charatcer");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await postSignIn({ email, password });
      localStorage.setItem("token", response.data.access_token);
      toast.success("Sign In Succesful");
      navigate("/todo", { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          setEmailError("User does not exist");
        } else if (error.response?.status === 401) {
          setPwError("Password error");
        }
      }
    }
  }

  function onClickPwIcon() {
    setPwType(pwType === "text" ? "password" : "text");
  }

  function navigateSignUp() {
    navigate("/signup", { replace: true });
  }

  return (
    <div className="signin">
      <h1>Sign In</h1>
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
          type={pwType}
          placeholder="Enter your Password"
          onChange={handlePasswordInput}
          errorMessage={pwError}
          child={
            <i
              className={`bx ${
                pwType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={onClickPwIcon}
            />
          }
        />
        <FormField
          testId="signin-button"
          type="submit"
          value="Sign in"
          disabled={!formIsValid}
        />

        <p className="signup-link">
          Don't have an account? <span onClick={navigateSignUp}>SignUp</span>
        </p>
      </form>
    </div>
  );
};

export default withAuth(SignIn);
