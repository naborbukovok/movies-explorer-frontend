import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a rel="noreferrer" target="_blank" className="portfolio__link active-link" href="https://github.com/naborbukovok/how-to-learn">
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-text">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a rel="noreferrer" target="_blank" className="portfolio__link active-link" href="https://github.com/naborbukovok/russian-travel">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-text">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a rel="noreferrer" target="_blank" className="portfolio__link active-link" href="https://github.com/naborbukovok/react-mesto-api-full-gha">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-text">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
