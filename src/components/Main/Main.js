import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Header isLoggedIn={false}>
        <nav className="header__nav-container">
          <button
            onClick={() => {
              navigate('/signup');
            }}
            className="main__register-button"
          >
            Регистрация
          </button>
          <button
            onClick={() => {
              navigate('/signin');
            }}
            className="main__login-button main__button"
          >
            Войти
          </button>
        </nav>
      </Header>
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
