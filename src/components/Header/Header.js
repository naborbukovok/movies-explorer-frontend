import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "header_color_grey" : ""}`}>
      <a className="header__link" href="/">
        <img className="header__logo active-button" src={logo} alt="Логотип" />
      </a>
      <Navigation loggedIn={props.loggedIn} />
    </header>
  );
}

export default Header;