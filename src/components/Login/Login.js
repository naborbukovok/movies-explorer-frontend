import React, { useState, useEffect } from "react";
import { isValid, ERROR_MESSAGE } from "../../utils/validation";
import { USER_PASSWORD_MIN_LENGTH } from "../../utils/constants";
import Hello from "../Hello/Hello";

import "./Login.css";

function Login(props) {
  const { handleLogin } = props;

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [isButtonBlocked, setIsButtonBlocked] = useState(true);

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
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setIsButtonBlocked(
      email.length === 0 ||
        !isEmailValid ||
        password.length === 0 ||
        !isPasswordValid
    );
  }, [email, password, isEmailValid, isPasswordValid]);

  return (
    <div className="login">
      <Hello title="Рады видеть!" />
      <form className="user-form" noValidate onSubmit={handleSubmit}>
        <div className="user-form__fields">
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
              className="user-form__input"
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
          type="submit"
          className={`login__button user-form__button ${
            isButtonBlocked ? "user-form__button_blocked" : "active-button"
          }`}
        >
          Войти
        </button>
      </form>

      <p className="auth-hint">
        Ещё не зарегистрированы?{" "}
        <a className="auth-link active-link" href="/signup">
          Регистрация
        </a>
      </p>
    </div>
  );
}

export default Login;
