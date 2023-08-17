import logoPath from '../../images/circle-logo.svg';
import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img
            src={logoPath}
            alt="Логотип дипломного проекта"
            className="header__logo header__button"
          />
        </Link>
        {children}
      </div>
    </header>
  );
}

export default Header;
