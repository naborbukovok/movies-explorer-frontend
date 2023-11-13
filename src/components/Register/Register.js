import { React, useState } from "react";
import { isValid, ERROR_MESSAGE } from "../../utils/validation";

import Hello from "../Hello/Hello";

import "./Register.css";

function Register() {
  const [isNameValid, setIsNameEmailValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNameInputChange = (e) => {
    isValid(e, setIsNameEmailValid);
  }

  const handleEmailInputChange = (e) => {
    isValid(e, setIsEmailValid);
  }

  const handlePasswordInputChange = (e) => {
    isValid(e, setIsPasswordValid);
  }

  return (
    <div className="register">
      <Hello title="Добро пожаловать!" />
      <form className="user-form" novalidate>
        <div className="user-form__fields">
          <label className="user-form__field">
            Имя
            <input
              name="name"
              placeholder="Введите имя"
              className="user-form__input"
              id="name"
              required
              type="text"
              minlength="2"
              maxlength="30"
              onChange={handleNameInputChange}
            />
            <span className={`user-form__error ${isNameValid ? "" : "user-form__error_active"}`}>{isNameValid ? "" : ERROR_MESSAGE}</span>
          </label>

          <label className="user-form__field">
            E-mail
            <input
              name="email"
              placeholder="Введите e-mail"
              className="user-form__input"
              id="email"
              required
              type="email"
              onChange={handleEmailInputChange}
            />
            <span className={`user-form__error ${isEmailValid ? "" : "user-form__error_active"}`}>{isEmailValid ? "" : ERROR_MESSAGE}</span>
          </label>

          <label className="user-form__field">
            Пароль
            <input
              name="password"
              placeholder="Введите пароль"
              className="user-form__input user-form__input_type_error"
              id="emaipassword"
              required
              type="password"
              minlength="8"
              onChange={handlePasswordInputChange}
            />
            <span className={`user-form__error ${isPasswordValid ? "" : "user-form__error_active"}`}>{isPasswordValid ? "" : ERROR_MESSAGE}</span>
          </label>
        </div>

        <button type="submit" className="register__button user-form__button active-button">
          Зарегистрироваться
        </button>
      </form>

      <p className="user-form__hint">
        Уже зарегистрированы? <a className="user-form__link active-link" href="/signin">Войти</a>
      </p>
    </div>
  );
}

export default Register;