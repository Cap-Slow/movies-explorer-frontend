import { namePattern } from '../utils/constants';

const emailValidator = require('email-validator');
const handleInputChange = (e, values, errors, setValues, setErrors) => {
  const target = e.target;
  const name = target.name;
  const value = target.value;
  setValues({ ...values, [name]: value });
  setErrors({ ...errors, [name]: setErrorText(target) });
};

function setErrorText(input) {
  if (input.validity.valueMissing) {
    return 'Это обязательное поле';
  }
  if (
    input.name === 'name' &&
    (input.value.length < 2 || input.value.length > 30)
  ) {
    return 'Должно быть от 2 до 30 символов';
  }
  if (input.name === 'email' && !emailValidator.validate(input.value)) {
    return 'Некорректный email';
  }
  if (input.type === 'text' && !namePattern.test(input.value)) {
    return 'Допустимы только латиница, кириллица, дефис и пробел';
  }
  return '';
}

function checkAuthValidity(isLoginPage, errors) {
  if (isLoginPage) {
    if (errors.email !== '' || errors.password !== '') {
      return false;
    }
    return true;
  } else {
    if (errors.email !== '' || errors.password !== '' || errors.name !== '') {
      return false;
    }
    return true;
  }
}

function checkProfileValidity(errors, values, currentUser) {
  if (
    errors.name ||
    errors.email ||
    (values.name === currentUser.name && values.email === currentUser.email)
  ) {
    return false;
  } else {
    return true;
  }
}

export { handleInputChange, checkAuthValidity, checkProfileValidity };
