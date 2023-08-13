import AuthPage from '../AuthPage/AuthPage';

function Register({ onRegister, errorMessage }) {
  return (
    <AuthPage
      onRegister={onRegister}
      errorMessage={errorMessage}
      isLoginPage={false}
      registerErrorMessage={errorMessage}
    ></AuthPage>
  );
}

export default Register;
