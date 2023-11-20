import { React, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import profileButtonIcon from "../../images/profile-button-icon.svg";

import "./Navigation.css";

function Navigation(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = props;

  const handleBurgerButtonClick = () => {
    setIsOpen(true);
  }

  const handleBurgerCloseButtonClick = () => {
    setIsOpen(false);
  }

  return (
    <div className="header__navigation">
      { isLoggedIn ? (
        <>
          <nav className="header__menu">
            <div className="header__links">
              <Link className={`active-link header__link ${(location.pathname === "/movies") ? "header__link_active" : "" }`} to="/movies">Фильмы</Link>
              <Link className={`active-link header__link ${(location.pathname === "/saved-movies") ? "header__link_active" : "" }`} to="/saved-movies">Сохранённые фильмы</Link>
            </div>
            <Link className="header__profile-link active-link" to="/profile">
              <img className="header__profile-link-image" src={profileButtonIcon} alt="Иконка профиля"/>
              <p className="header__profile-link-text">Аккаунт</p>
            </Link>
          </nav>

          <button className="header__burger-button" type="button" onClick={handleBurgerButtonClick} />
          <div className={`header__burger-menu-container ${ isOpen ? "header__burger-menu-container__opened" : "" }`}>
            <div className={`header__burger-menu ${ isOpen ? "header__burger-menu_opened" : "" }`}>
              <button className="header__burger-close-button" type="button" onClick={handleBurgerCloseButtonClick} />
              <nav>
                <div className="header__burger-menu-links">
                  <Link className={`active-link header__burger-menu-link ${(location.pathname === "/") ? "header__burger-menu-link_active" : "" }`} to="/">Главная</Link>
                  <Link className={`active-link header__burger-menu-link ${(location.pathname === "/movies") ? "header__burger-menu-link_active" : "" }`} to="/movies">Фильмы</Link>
                  <Link className={`active-link header__burger-menu-link ${(location.pathname === "/saved-movies") ? "header__burger-menu-link_active" : "" }`} to="/saved-movies">Сохранённые фильмы</Link>
                </div>
                <Link className="header__profile-link header__profile-link_place_burger-menu active-link" to="/profile">
                  <img className="header__profile-link-image" src={profileButtonIcon} alt="Иконка профиля"/>
                  <p className="header__profile-link-text">Аккаунт</p>
                </Link>
              </nav>
            </div>
          </div>
        </>
      ) : (
        <nav className="header__entry-menu">
          <Link className="header__entry-link header__entry-link_color_none active-link" to="/signup">Регистрация</Link>
          <Link className="header__entry-link header__entry-link_color_blue active-button" to="/signin">Войти</Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
