import { useNavigate } from 'react-router-dom';

function Navigation({ onMenuOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="navigation__container">
      <button
        onClick={() => {
          navigate('/movies');
        }}
        className="navigation__link-button navigation__link-button_font_medium"
      >
        Фильмы
      </button>
      <button
        onClick={() => {
          navigate('/saved-movies');
        }}
        className="navigation__link-button navigation__link-button_font_regular navigation__link-button_margin_low"
      >
        Сохранённые фильмы
      </button>
      <button
        onClick={() => {
          navigate('/profile');
        }}
        className="navigation__link-button navigation__link-button_font-size_regular navigation__link-button_margin_medium"
      >
        Аккаунт
      </button>
      <button
        onClick={() => {
          navigate('/profile');
        }}
        className="navigation__account-button navigation__button"
      ></button>
      <button
        onClick={onMenuOpen}
        className="navigation__menu-button navigation__button"
      ></button>
    </nav>
  );
}

export default Navigation;
