import "./NavTab.css";

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item">
        <a className="nav-tab__link active-link" href="/#about-project">О проекте</a>
      </li>
      <li className="nav-tab__item">
        <a className="nav-tab__link active-link" href="/#techs">Технологии</a>
      </li>
      <li className="nav-tab__item">
        <a className="nav-tab__link active-link" href="/#about-me">Студент</a>
      </li>
    </ul>
  );
}

export default NavTab;