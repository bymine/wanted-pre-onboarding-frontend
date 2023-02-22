import React, { useState } from "react";
import "./signIn.css";
import { FormField } from "../../components/index";
import { useNavigate } from "react-router-dom";
import withAuth from "../../hoc/withAuth";
import { toast } from "react-toastify";
import { postSignIn } from "../../apis/auth/auth";
import { AxiosError } from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");

  const formIsValid =
    email !== "" &&
    password !== "" &&
    emailErrorMessage === "" &&
    passwordErrorMessage === "";

  function checkEmail() {
    const emailRegex = /^[^ ]+@[^ ]+[a-z]/;
    if (!email.match(emailRegex)) {
      return setEmailErrorMessage("Please enter a valid email");
    }
    setEmailErrorMessage("");
  }

  function checkPassword() {
    const passwordRegex = /[^ ]{8,}/;
    if (!password.match(passwordRegex)) {
      return setPasswordErrorMessage("Please enter at least 8 charatcer");
    }
    setPasswordErrorMessage("");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const returnToken = await postSignIn({ email, password });
      localStorage.setItem("token", returnToken["access_token"]);
      toast.success("Sign In Succesful");
      navigate("/todo", { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          setEmailErrorMessage("User does not exist");
        } else if (error.response?.status === 401) {
          setPasswordErrorMessage("Password error");
        }
      }
    }
  };

  function showPassword() {
    setPasswordInputType(passwordInputType === "text" ? "password" : "text");
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
          onChange={(e) => setEmail(e.target.value)}
          validator={checkEmail}
          errorMessage={emailErrorMessage}
        />

        <FormField
          testId="password-input"
          type={passwordInputType}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          validator={checkPassword}
          errorMessage={passwordErrorMessage}
          child={
            <i
              className={`bx ${
                passwordInputType === "text" ? "bx-show" : "bx-hide"
              } show-hide`}
              onClick={showPassword}
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