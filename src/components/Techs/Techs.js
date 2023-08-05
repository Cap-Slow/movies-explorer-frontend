function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="main__section-title main__section-title_section_techs">
        Технологии
      </h2>
      <div className="techs__container">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__list-item-text">HTML</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">React</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-item-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
