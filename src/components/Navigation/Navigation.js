import { useNavigate, NavLink } from 'react-router-dom';

function Navigation({ onMenuOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="navigation__container">
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `${isActive ? 'navigation__link_type_active' : ''} navigation__link`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          `${
            isActive ? 'navigation__link_type_active' : ''
          } navigation__link navigation__link_margin_low`
        }
      >
        Сохранённые фильмы
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${
            isActive ? 'navigation__link_type_active' : ''
          } navigation__link navigation__link_margin_medium`
        }
      >
        Аккаунт
      </NavLink>
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
