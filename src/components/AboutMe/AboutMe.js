import myPhoto from "../../images/my-photo.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__data">
        <img className="about-me__my-photo" src={myPhoto} alt="Мое фото" />
        <article className="about-me__info">
          <h3 className="about-me__name">Мария</h3>
          <p className="about-me__status">Фронтенд-разработчик, 21 год</p>
          <p className="about-me__description">
            Я живу в Москве, учусь в Высшей школе бизнеса НИУ ВШЭ. Люблю
            читать книги и путешествовать. В ИТ я уже
            несколько лет, однако до прохождения курсов по веб-разработке
            от сервиса Яндекс Практикум занималась только бэкендом.
            Вместе с командой часто показываю хорошие результаты
            на хакатонах.
          </p>
          <a rel="noreferrer" target="_blank" className="about-me__github-link active-link" href="https://github.com/naborbukovok">Github</a>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
