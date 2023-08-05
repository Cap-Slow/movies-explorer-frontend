import logoPath from '../../images/circle-logo.svg';
import { useNavigate } from 'react-router-dom';

function Header({ children, isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <header className={`header ${isLoggedIn ? '' : 'header_theme_pink'}`}>
      <div className="header__container">
        <img
          onClick={() => navigate('/')}
          src={logoPath}
          alt="Логотип дипломного проекта"
          className="header__logo header__button"
        />
        {children}
      </div>
    </header>
  );
}

export default Header;
