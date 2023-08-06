import { useNavigate } from 'react-router-dom';

function SliderMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <nav className={`slider-menu ${isOpen ? 'slider-menu_opened' : ''}`}>
      <div className="slider-menu__text-button-container">
        <button
          onClick={() => {
            navigate('/');
          }}
          className="slider-menu__text-button"
        >
          Главная
        </button>
        <button
          onClick={() => {
            navigate('/movies');
          }}
          className="slider-menu__text-button slider-menu__text-button_type_underline"
        >
          Фильмы
        </button>
        <button
          onClick={() => {
            navigate('/saved-movies');
          }}
          className="slider-menu__text-button"
        >
          Сохранённые фильмы
        </button>
      </div>
      <div className="slider-menu__account-section">
        <button
          onClick={() => {
            navigate('/profile');
          }}
          className="slider-menu__text-button slider-menu__link_text_small"
        >
          Аккаунт
        </button>
        <button
          onClick={() => {
            navigate('/profile');
          }}
          className="slider-menu__account-button slider-menu__button"
        ></button>
      </div>
      <button
        onClick={onClose}
        className="slider-menu__close-button slider-menu__button"
      ></button>
    </nav>
  );
}

export default SliderMenu;
