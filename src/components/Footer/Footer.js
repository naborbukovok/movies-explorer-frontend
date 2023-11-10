import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <ul className="footer__navbar">
          <li className="footer__link-item">
            <a rel="noreferrer" className="footer__link active-link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
          </li>
          <li  className="footer__link-item">
            <a rel="noreferrer" className="footer__link active-link" href="https://github.com/naborbukovok" target="_blank">Github</a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;