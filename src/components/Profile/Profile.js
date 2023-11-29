import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { isValid } from "../../utils/validation.js";
import {
  USER_NAME_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_PATTERN,
} from "../../utils/constants";

import "./Profile.css";

function Profile(props) {
  const { handleSetUserInfo, handleSignOut, isProfileUpdateSucсessful } = props;
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameEmailValid] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [isButtonBlocked, setIsButtonBlocked] = useState(true);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
    isValid(e, setIsNameEmailValid);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    isValid(e, setIsEmailValid);
  };

  const onEditButtonClick = () => {
    setIsProfileEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsProfileEditing(false);
    handleSetUserInfo(name, email);
  };

  useEffect(() => {
    if (currentUser && !isProfileEditing) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
    }

  }, [currentUser, isProfileEditing]);

  useEffect(() => {
    setIsButtonBlocked(
      name.length === 0 ||
      !isNameValid ||
      email.length === 0 ||
      !isEmailValid ||
      (name === currentUser.name && email === currentUser.email)
    );
  }, [name, email, isNameValid, isEmailValid, currentUser]);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <form className="profile__form" onSubmit={handleFormSubmit}>
        <div className="profile__form-fields">
          <p className={`profile__form-hint ${isProfileUpdateSucсessful ? "" : "profile__form-hint_invisible"}`}>Профиль успешно обновлён</p>
          <label className="profile__form-field">
            <input
              name="profile-name"
              type="text"
              className="profile__form-input"
              id="profile-name"
              required
              minLength={USER_NAME_MIN_LENGTH}
              maxLength={USER_NAME_MAX_LENGTH}
              pattern={USER_NAME_PATTERN}
              value={name}
              onChange={handleNameInputChange}
              disabled={!isProfileEditing}
            />
            <span className="profile__form-span">Имя</span>
          </label>

          <label className="profile__form-field">
            <input
              name="profile-email"
              type="email"
              className="profile__form-input"
              id="profile-email"
              required
              value={email}
              onChange={handleEmailInputChange}
              disabled={!isProfileEditing}
            />
            <span className="profile__form-span">E-mail</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isButtonBlocked}
          className={
            `profile__form-button
            ${ isProfileEditing ? "" : "profile__form-button_invisible" }
            ${ isButtonBlocked ? "" : "active-button" }`
          }
        >
          Сохранить
        </button>
      </form>
      <button
        type="button"
        className={
          `profile__edit-button active-link
          ${ !isProfileEditing ? "" : "profile__edit-button_invisible" }`
        }
        onClick={onEditButtonClick}
      >
        Редактировать
      </button>
      <button
        className={
          `profile__exit-button active-link
          ${ !isProfileEditing ? "" : "profile__exit-button_invisible" }`
        }
        onClick={handleSignOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
