import AuthPage from '../AuthPage/AuthPage';

function Login({ onLogin, errorMessage, isInputDisabled }) {
  return (
    <AuthPage
      isLoginPage={true}
      onLogin={onLogin}
      loginErrorMessage={errorMessage}
      isInputDisabled={isInputDisabled}
    ></AuthPage>
  );
}

export default Login;
