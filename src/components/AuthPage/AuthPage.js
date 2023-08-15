import logoPath from '../../images/circle-logo.svg';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import {
  handleInputChange,
  checkAuthValidity,
} from '../../utils/formValidation';
import { useNavigate, Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

function AuthPage({
  isLoginPage,
  onLogin,
  loginErrorMessage,
  registerErrorMessage,
  onRegister,
  isInputDisabled,
}) {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleAuthInputChange(e) {
    handleInputChange(e, values, errors, setValues, setErrors);
  }

  useEffect(() => {
    setIsValid(checkAuthValidity(isLoginPage, errors));
  }, [errors]);

  useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  function handleLogin(e) {
    e.preventDefault();
    onLogin(values);
  }

  function handleRegister(e) {
    e.preventDefault();
    onRegister(values);
  }

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
                inputName={'name'}
                labelName={'Имя'}
                placeholder={'Введите имя'}
                onInputChange={handleAuthInputChange}
                minlength={2}
                maxlength={30}
                isInputDisabled={isInputDisabled}
              />
              <InputError>{errors.name}</InputError>
            </>
          )}
          <FormInput
            type={'email'}
            inputName={'email'}
            labelName={'E-mail'}
            placeholder={'Введите E-mail'}
            onInputChange={handleAuthInputChange}
            isInputDisabled={isInputDisabled}
          />
          <InputError>{errors.email}</InputError>
          <FormInput
            type={'password'}
            inputName={'password'}
            labelName={'Пароль'}
            placeholder={'Введите пароль'}
            onInputChange={handleAuthInputChange}
            isInputDisabled={isInputDisabled}
          />
          <InputError>{errors.password}</InputError>
          <p className="auth-page__register-error">
            {isLoginPage ? loginErrorMessage : registerErrorMessage}
          </p>
          <button
            className={`auth-page__submit-button ${
              isLoginPage ? 'auth-page__submit-button_margin_high' : ''
            } ${!isValid ? 'auth-page__submit-button_disabled' : ''}`}
            disabled={!isValid}
            onClick={isLoginPage ? handleLogin : handleRegister}
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
