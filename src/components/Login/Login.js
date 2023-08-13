import AuthPage from '../AuthPage/AuthPage';

function Login({ onLogin, errorMessage }) {
  return (
    <AuthPage
      isLoginPage={true}
      onLogin={onLogin}
      loginErrorMessage={errorMessage}
    ></AuthPage>
  );
}

export default Login;
