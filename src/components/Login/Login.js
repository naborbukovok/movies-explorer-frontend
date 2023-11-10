import Hello from "../Hello/Hello";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Hello title="Рады видеть!" />
      <form className="user-form">
        <div className="user-form__fields">
          <label className="user-form__field">
            E-mail
            <input
              name="email"
              type="email"
              placeholder="test@yandex.ru"
              className="user-form__input"
              id="email"
              required
            />
          </label>

          <label className="user-form__field">
            Пароль
            <input
              name="password"
              type="password"
              placeholder="12345678"
              className="user-form__input"
              id="emaipassword"
              required
            />
          </label>
        </div>

        <button type="submit" className="login__button user-form__button active-button">
          Войти
        </button>
      </form>

      <p className="user-form__hint">
        Ещё не зарегистрированы? <a className="user-form__link active-link" href="/signup">Регистрация</a>
      </p>
    </div>
  );
}

export default Login;