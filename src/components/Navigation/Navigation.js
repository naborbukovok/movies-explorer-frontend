import { React, useState } from "react";
import { useLocation } from "react-router-dom";
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
              <a className={`active-link header__link ${(location.pathname === "/movies") ? "header__link_active" : "" }`} href="/movies">Фильмы</a>
              <a className={`active-link header__link ${(location.pathname === "/saved-movies") ? "header__link_active" : "" }`} href="/saved-movies">Сохранённые фильмы</a>
            </div>
            <a className="header__profile-link active-link" href="/profile">
              <img className="header__profile-link-image" src={profileButtonIcon} alt="Иконка профиля"/>
              <p className="header__profile-link-text">Аккаунт</p>
            </a>
          </nav>

          <button className="header__burger-button" type="button" onClick={handleBurgerButtonClick} />
          <div className={`header__burger-menu-container ${ isOpen ? "header__burger-menu-container__opened" : "" }`}>
            <div className={`header__burger-menu ${ isOpen ? "header__burger-menu_opened" : "" }`}>
              <button className="header__burger-close-button" type="button" onClick={handleBurgerCloseButtonClick} />
              <nav>
                <div className="header__burger-menu-links">
                  <a className={`active-link header__burger-menu-link ${(location.pathname === "/") ? "header__burger-menu-link_active" : "" }`} href="/">Главная</a>
                  <a className={`active-link header__burger-menu-link ${(location.pathname === "/movies") ? "header__burger-menu-link_active" : "" }`} href="/movies">Фильмы</a>
                  <a className={`active-link header__burger-menu-link ${(location.pathname === "/saved-movies") ? "header__burger-menu-link_active" : "" }`} href="/saved-movies">Сохранённые фильмы</a>
                </div>
                <a className="header__profile-link header__profile-link_place_burger-menu active-link" href="/profile">
                  <img className="header__profile-link-image" src={profileButtonIcon} alt="Иконка профиля"/>
                  <p className="header__profile-link-text">Аккаунт</p>
                </a>
              </nav>
            </div>
          </div>
        </>
      ) : (
        <nav className="header__entry-menu">
          <a className="header__entry-link header__entry-link_color_none active-link" href="/signup">Регистрация</a>
          <a className="header__entry-link header__entry-link_color_blue active-button" href="/signin">Войти</a>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
