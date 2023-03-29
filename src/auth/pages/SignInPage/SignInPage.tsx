import { FormField } from '../../components';
import { withAuth } from '../../../commons/components';
import { useSignIn } from '../../hooks';
import * as S from '../styles';
import { BUTTON_NAME, INPUT_TYPE } from '../../constants';
import { PLACEHOLDER, TEST_ID } from '../../../commons/constants';

const SignInPage = () => {
  const {
    email,
    password,
    isDisabled,
    inputType,
    icon,
    onClick,
    navigateSignUp,
    handleSubmit,
  } = useSignIn();

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <form onSubmit={handleSubmit}>
        <FormField
          testId={TEST_ID.EMAIL_INPUT}
          type={INPUT_TYPE.TEXT}
          placeholder={PLACEHOLDER.SIGNIN_EMAIL}
          onChange={email.onChange}
          errorMessage={email.error}
        />
        <FormField
          testId={TEST_ID.PASSWORD_INPUT}
          type={inputType}
          placeholder={PLACEHOLDER.SIGNIN_PW}
          onChange={password.onChange}
          errorMessage={password.error}
          child={<i className={icon} onClick={onClick} />}
        />
        <FormField
          testId={TEST_ID.SIGNIN_BUTTON}
          type={INPUT_TYPE.SUBMIT}
          value={BUTTON_NAME.SIGNIN}
          disabled={isDisabled}
        />

        <S.LinkBox>
          Don't have an account?
          <S.Span onClick={navigateSignUp}>SignUp</S.Span>
        </S.LinkBox>
      </form>
    </S.Container>
  );
};

export default withAuth(SignInPage);
