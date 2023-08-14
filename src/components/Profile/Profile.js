import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SliderMenu from '../SliderMenu/SliderMenu';
import { useState, useContext, useEffect, useCallback } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {
  handleInputChange,
  checkProfileValidity,
} from '../../utils/formValidation';

function Profile({
  onMenuOpen,
  isMenuOpen,
  closeMenu,
  onSignOut,
  isProfileFormOpen,
  onEditFormOpen,
  onProfileUpdate,
  isSuccessProfileUpdate,
  profileUpdateMessage,
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function handleProfileInputChange(e) {
    handleInputChange(e, values, errors, setValues, setErrors);
  }

  useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  useEffect(() => {
    setIsValid(checkProfileValidity(errors, values, currentUser));
  }, [errors, values, currentUser]);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  function handleProfileUpdate(e) {
    e.preventDefault();
    onProfileUpdate(values);
  }

  return (
    <>
      <Header>
        <Navigation onMenuOpen={onMenuOpen} />
        <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </Header>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form-container">
            <div className="profile__row-container">
              <p className="profile__info-label">Имя</p>
              <input
                className="profile__input"
                type="text"
                name="name"
                value={values.name || ''}
                required
                disabled={!isProfileFormOpen}
                onChange={handleProfileInputChange}
                minLength="2"
                placeholder="Введите имя"
              />
            </div>
            <span className="profile__error-message">{errors.name}</span>
            <div className="profile__row-container">
              <label className="profile__info-label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                value={values.email || ''}
                required
                disabled={!isProfileFormOpen}
                onChange={handleProfileInputChange}
                placeholder="Введите E-mail"
              />
            </div>
            <span className="profile__error-message">{errors.email}</span>

            <p
              className={`profile__update-message ${
                isSuccessProfileUpdate
                  ? 'profile__success-message'
                  : 'profile__update-message_type_error'
              }`}
            >
              {profileUpdateMessage}
            </p>
            {!isProfileFormOpen && (
              <button
                type="button"
                className="profile__button"
                onClick={onEditFormOpen}
              >
                Редактировать
              </button>
            )}
            {!isProfileFormOpen && (
              <button
                type="button"
                onClick={onSignOut}
                className="profile__button profile__button_color_red"
              >
                Выйти из аккаунта
              </button>
            )}
            {isProfileFormOpen && (
              <button
                type="submit"
                disabled={!isValid}
                className={`profile__save-button ${
                  !isValid ? 'profile__save-button_type_disabled' : ''
                }`}
                onClick={handleProfileUpdate}
              >
                Сохранить
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
