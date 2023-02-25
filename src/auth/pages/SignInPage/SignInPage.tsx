import { useState } from "react";
import { FormField } from "../../components";
import { withAuth } from "../../../commons/components";
import { AuthForm, useAuthForm } from "../../hooks";
import "./signInPage.css";

const SignInPage = () => {
  const {
    emailError,
    pwError,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    isDisabled,
    navigateSignUp,
  } = useAuthForm({ type: AuthForm.SIGNIN });

  const [pwType, setPwType] = useState("password");

  function onClickPwIcon() {
    setPwType(pwType === "text" ? "password" : "text");
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
          disabled={isDisabled}
        />

        <p className="signup-link">
          Don't have an account? <span onClick={navigateSignUp}>SignUp</span>
        </p>
      </form>
    </div>
  );
};

export default withAuth(SignInPage);
