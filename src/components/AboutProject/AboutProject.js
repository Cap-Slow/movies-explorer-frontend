function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="main__section-title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__description-container">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-container">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <p className="about-project__timeline-text about-project__timeline-text_theme_black">
          1 неделя
        </p>
        <p className="about-project__timeline-text about-project__timeline-text_theme_gray">
          4 недели
        </p>
        <p className="about-project__timeline-text about-project__timeline-text_type_gray">
          Back-end
        </p>
        <p className="about-project__timeline-text about-project__timeline-text_type_gray">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
