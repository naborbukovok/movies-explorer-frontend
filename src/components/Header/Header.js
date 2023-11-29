import { useLocation, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
  const { isLoggedIn } = props;

  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "header_color_grey" : ""}`}>
      <Link className="header__link" to="/">
        <img className="header__logo active-button" src={logo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;