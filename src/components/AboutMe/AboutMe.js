import photoPath from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="main__section-title main__section-title_section_student">
        Студент
      </h2>
      <div className="about-me__info-container">
        <div className="about-me__text-info-container">
          <h3 className="about-me__name">Дмитрий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__description">
            Я родился в городе Пермь, закончил философско-социологический
            факультет ПГНИУ. Работаю в сфере IT с 2020 года. Моя первая работа
            не была связана с кодом, но позволила мне влиться в новую для меня
            сферу деятельности и развить важные софт скиллы. В начале 2022 года
            я получил должность младшего разработчика. Пройденный курс по
            веб-разработке от Яндекс.Практикум позволил мне получить необходимые
            знания и навыки для работы в сфере веб-разработки и более эффективно
            выполнять свои обязанности.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Cap-Slow?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photoPath} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
