import logoPath from '../../images/circle-logo.svg';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import { useNavigate } from 'react-router-dom';

function AuthPage({ isLoginPage }) {
  const navigate = useNavigate();

  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <img className="auth-page__logo" src={logoPath} alt="Логотип проекта" />
        <h2 className="auth-page__title">
          {isLoginPage ? 'Рады видеть!' : 'Добро пожаловать!'}
        </h2>
        <form className="auth-page__form">
          {!isLoginPage && (
            <>
              <FormInput type={'text'} labelName={'Имя'} />
              <InputError />
            </>
          )}
          <FormInput type={'email'} labelName={'E-mail'} />
          <InputError />
          <FormInput type={'password'} labelName={'Пароль'} />
          <InputError>{isLoginPage ? '' : 'Что-то пошло не так...'}</InputError>
          <button
            className={`auth-page__submit-button ${
              isLoginPage ? 'auth-page__submit-button_margin_high' : ''
            }`}
            type="submit"
          >
            {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
          </button>
          <p className="auth-page__text">
            {isLoginPage ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}{' '}
            <button
              onClick={() => {
                navigate(`${isLoginPage ? '/signup' : '/signin'}`);
              }}
              className="auth-page__redirect-button"
              href="/signin"
            >
              {isLoginPage ? 'Регистрация' : 'Войти'}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default AuthPage;
