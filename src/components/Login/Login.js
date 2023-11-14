import { React, useState } from "react";
import { isValid, ERROR_MESSAGE } from "../../utils/validation";
import Hello from "../Hello/Hello";

import "./Login.css";

function Login() {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailInputChange = (e) => {
    isValid(e, setIsEmailValid);
  }

  const handlePasswordInputChange = (e) => {
    isValid(e, setIsPasswordValid);
  }

  return (
    <div className="login">
      <Hello title="Рады видеть!" />
      <form className="user-form" noValidate>
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
              onChange={handleEmailInputChange}
            />
            <span className={`user-form__error ${isEmailValid ? "" : "user-form__error_active"}`}>{isEmailValid ? "" : ERROR_MESSAGE}</span>
          </label>

          <label className="user-form__field">
            Пароль
            <input
              name="password"
              placeholder="Введите пароль"
              className="user-form__input"
              id="emaipassword"
              required
              type="password"
              minLength="8"
              onChange={handlePasswordInputChange}
            />
            <span className={`user-form__error ${isPasswordValid ? "" : "user-form__error_active"}`}>{isPasswordValid ? "" : ERROR_MESSAGE}</span>
          </label>
        </div>

        <button type="submit" className="login__button user-form__button active-button">
          Войти
        </button>
      </form>

      <p className="auth-hint">
        Ещё не зарегистрированы? <a className="auth-link active-link" href="/signup">Регистрация</a>
      </p>
    </div>
  );
}

export default Login;