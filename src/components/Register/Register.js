import Hello from "../Hello/Hello";

import "./Register.css";

function Register() {
  return (
    <div className="register">
      <Hello title="Добро пожаловать!" />
      <form className="user-form">
        <div className="user-form__fields">
          <label className="user-form__field">
            Имя
            <input
              name="name"
              type="text"
              placeholder="Мария"
              className="user-form__input"
              id="name"
              required
            />
          </label>

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
              className="user-form__input user-form__input_type_error"
              id="emaipassword"
              required
              value="123"
            />
            <p className="user-form__error-text">Что-то пошло не так...</p>
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