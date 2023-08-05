function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text footer__text_color_gray ">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__text">&copy; 2023</p>
        <nav className="footer__links">
          <a
            className="footer__text footer__link"
            href="https://praktikum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__text footer__link"
            href="https://github.com/"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
