import { React, useEffect, useState } from "react";
import { isValid, ERROR_MESSAGE } from "../../utils/validation";
import {
  USER_NAME_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_PATTERN,
  USER_PASSWORD_MIN_LENGTH,
} from "../../utils/constants";

import Hello from "../Hello/Hello";

import "./Register.css";

function Register(props) {
  const { handleRegister } = props;

  const [name, setName] = useState("");
  const [isNameValid, setIsNameEmailValid] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [isButtonBlocked, setIsButtonBlocked] = useState(true);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
    isValid(e, setIsNameEmailValid);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    isValid(e, setIsEmailValid);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
    isValid(e, setIsPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(email, password, name);
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setIsButtonBlocked(
      name.length === 0 ||
        !isNameValid ||
        email.length === 0 ||
        !isEmailValid ||
        password.length === 0 ||
        !isPasswordValid
    );
  }, [name, email, password, isNameValid, isEmailValid, isPasswordValid]);

  return (
    <div className="register">
      <Hello title="Добро пожаловать!" />
      <form className="user-form" noValidate onSubmit={handleSubmit}>
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
              minLength={USER_NAME_MIN_LENGTH}
              maxLength={USER_NAME_MAX_LENGTH}
              pattern={USER_NAME_PATTERN}
              value={name}
              onChange={handleNameInputChange}
            />
            <span
              className={`user-form__error ${
                isNameValid ? "" : "user-form__error_active"
              }`}
            >
              {isNameValid ? "" : ERROR_MESSAGE}
            </span>
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
              value={email}
              onChange={handleEmailInputChange}
            />
            <span
              className={`user-form__error ${
                isEmailValid ? "" : "user-form__error_active"
              }`}
            >
              {isEmailValid ? "" : ERROR_MESSAGE}
            </span>
          </label>

          <label className="user-form__field">
            Пароль
            <input
              name="password"
              placeholder="Введите пароль"
              className="user-form__input user-form__input_type_error"
              id="password"
              required
              type="password"
              minLength={USER_PASSWORD_MIN_LENGTH}
              value={password}
              onChange={handlePasswordInputChange}
            />
            <span
              className={`user-form__error ${
                isPasswordValid ? "" : "user-form__error_active"
              }`}
            >
              {isPasswordValid ? "" : ERROR_MESSAGE}
            </span>
          </label>
        </div>

        <button
          disabled={isButtonBlocked}
          type="submit"
          className={`register__button user-form__button ${
            isButtonBlocked ? "user-form__button_blocked" : "active-button"
          }`}
        >
          Зарегистрироваться
        </button>
      </form>

      <p className="auth-hint">
        Уже зарегистрированы?{" "}
        <a className="auth-link active-link" href="/signin">
          Войти
        </a>
      </p>
    </div>
  );
}

export default Register;
