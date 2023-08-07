function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <a
          href="https://github.com/Cap-Slow/first-project"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link-container"
        >
          <p className="portfolio__link-text">Статичный сайт</p>
          <button className="portfolio__link-button"></button>
        </a>
        <a
          href="https://github.com/Cap-Slow/russian-travel"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link-container"
        >
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <button className="portfolio__link-button"></button>
        </a>
        <a
          href="https://github.com/Cap-Slow/react-mesto-api-full-gha"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link-container"
        >
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <button className="portfolio__link-button"></button>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
