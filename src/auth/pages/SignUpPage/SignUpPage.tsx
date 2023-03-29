import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import * as S from '../styles';
import { BUTTON_NAME, INPUT_TYPE } from '../../constants';
import { PLACEHOLDER, TEST_ID } from '../../../commons/constants';
import { useSignUp } from '../../hooks';

const SignUpPage = () => {
  const {
    email,
    password,
    confirmPassword,
    isDisabled,
    createPwType,
    createPwIcon,
    onClickCreatePw,
    confirmPwType,
    confirmPwIcon,
    onClickConfirmPw,
    navigateSignIn,
    handleSubmit,
  } = useSignUp();
  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNUP_EMAIL}
          onChange={email.onChange}
          errorMessage={email.error}
        />
        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={createPwType}
          placeholder={PLACEHOLDER.SIGNUP_PW}
          onChange={password.onChange}
          errorMessage={password.error}
          child={<i className={createPwIcon} onClick={onClickCreatePw} />}
        />
        <FormField
          testId={TEST_ID.CONFIRM_PASSWORD_INPUT}
          type={confirmPwType}
          placeholder={PLACEHOLDER.SIGNUP_CONFIRM_PW}
          onChange={confirmPassword.onChange}
          errorMessage={confirmPassword.error}
          child={<i className={confirmPwIcon} onClick={onClickConfirmPw} />}
        />
        <FormField
          testId={TEST_ID.SIGNUP_BUTTON}
          type={INPUT_TYPE.SUBMIT}
          value={BUTTON_NAME.SIGNUP}
          disabled={isDisabled}
        />

        <S.LinkBox>
          Already have an account?{' '}
          <S.Span onClick={navigateSignIn}>Signin</S.Span>
        </S.LinkBox>
      </form>
    </S.Container>
  );
};

export default withAuth(SignUpPage);
