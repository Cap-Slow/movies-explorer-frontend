import logoPath from '../../images/circle-logo.svg';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import { useNavigate, Link } from 'react-router-dom';

function AuthPage({ isLoginPage }) {
  const navigate = useNavigate();

  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <Link to="/" className="auth-page__link">
          <img
            src={logoPath}
            alt="Логотип дипломного проекта"
            className="auth-page__logo"
          />
        </Link>
        <h2 className="auth-page__title">
          {isLoginPage ? 'Рады видеть!' : 'Добро пожаловать!'}
        </h2>
        <form className="auth-page__form">
          {!isLoginPage && (
            <>
              <FormInput
                type={'text'}
                labelName={'Имя'}
                placeholder={'Введите имя'}
              />
              <InputError />
            </>
          )}
          <FormInput
            type={'email'}
            labelName={'E-mail'}
            placeholder={'Введите E-mail'}
          />
          <InputError />
          <FormInput
            type={'password'}
            labelName={'Пароль'}
            placeholder={'Введите пароль'}
          />
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
