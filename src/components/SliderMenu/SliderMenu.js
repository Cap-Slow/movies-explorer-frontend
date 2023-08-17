import { useNavigate, NavLink } from 'react-router-dom';

function SliderMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <nav className={`slider-menu ${isOpen ? 'slider-menu_opened' : ''}`}>
      <div className="slider-menu__nav-link-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? 'slider-menu__nav-link_type_active' : ''
            } slider-menu__nav-link`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${
              isActive ? 'slider-menu__nav-link_type_active' : ''
            } slider-menu__nav-link`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `${
              isActive ? 'slider-menu__nav-link_type_active' : ''
            } slider-menu__nav-link`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="slider-menu__account-section">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${
              isActive ? 'slider-menu__nav-link_type_active' : ''
            } slider-menu__nav-link slider-menu__link_text_small`
          }
        >
          Аккаунт
        </NavLink>
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
