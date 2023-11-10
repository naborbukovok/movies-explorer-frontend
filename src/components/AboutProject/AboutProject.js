import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle title="О проекте" />
      <div className="about-project__paragraphs">
        <article className="about-project__paragraph">
          <h3 className="about-project__paragraph-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph-text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__paragraph">
          <h3 className="about-project__paragraph-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые
          нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__schedule">
        <p className="about-project__task-time about-project__task-time_color_blue">1 неделя</p>
        <p className="about-project__task-time about-project__task-time_color_gray">4 недели</p>
        <p className="about-project__task-name">Back-end</p>
        <p className="about-project__task-name">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
