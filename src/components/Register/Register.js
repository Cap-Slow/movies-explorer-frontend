import AuthPage from '../AuthPage/AuthPage';

function Register({ onRegister, errorMessage, isInputDisabled }) {
  return (
    <AuthPage
      onRegister={onRegister}
      errorMessage={errorMessage}
      isLoginPage={false}
      registerErrorMessage={errorMessage}
      isInputDisabled={isInputDisabled}
    ></AuthPage>
  );
}

export default Register;
