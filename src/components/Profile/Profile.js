import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SliderMenu from '../SliderMenu/SliderMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ onMenuOpen, isMenuOpen, closeMenu }) {
  const [isEditableForm, setIsEditableForm] = useState(false);
  const [name, setName] = useState('Дмитрий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isProfileUpdateError, setIsProfileUpdateError] = useState(false);
  const navigate = useNavigate();

  function editForm() {
    setIsEditableForm(true);
    setIsProfileUpdateError(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsEditableForm(false);
    setIsProfileUpdateError(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <Header isLoggedIn={true}>
        <Navigation onMenuOpen={onMenuOpen} />
        <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </Header>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Дмитрий!</h2>
          <form className="profile__form-container">
            <div className="profile__row-container">
              <p className="profile__info-label">Имя</p>
              <input
                className="profile__input"
                type="text"
                required
                value={name}
                disabled={!isEditableForm}
                onChange={handleNameChange}
                minLength="2"
                placeholder="Введите имя"
              />
            </div>
            <div className="profile__row-container">
              <label className="profile__info-label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                required
                value={email}
                disabled={!isEditableForm}
                onChange={handleEmailChange}
                placeholder="Введите E-mail"
              />
            </div>
            <p
              className={`profile__error-message ${
                isProfileUpdateError
                  ? 'profile__error-message_type_visible'
                  : ''
              }  `}
            >
              При обновлении профиля произошла ошибка.
            </p>
            {!isEditableForm && (
              <button
                type="button"
                className="profile__button "
                onClick={editForm}
              >
                Редактировать
              </button>
            )}
            {!isEditableForm && (
              <button
                type="button"
                onClick={() => {
                  navigate('/signin');
                }}
                className="profile__button profile__button_color_red"
              >
                Выйти из аккаунта
              </button>
            )}
            {isEditableForm && (
              <button
                type="submit"
                className="profile__save-button"
                onClick={handleSubmit}
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
