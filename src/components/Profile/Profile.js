import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Мария!</h1>
      <form className="profile__form">
        <div className="profile__form-fields">
          <label className="profile__form-field">
            Имя
            <input
              name="profile-name"
              type="text"
              className="profile__form-input"
              id="profile-name"
              required
              value="Мария"
              disabled
            />
          </label>

          <label className="profile__form-field">
            E-mail
            <input
              name="profile-email"
              type="email"
              className="profile__form-input"
              id="profile-email"
              required
              value="test@yandex.ru"
              disabled
            />
          </label>
        </div>

        <button type="submit" className="profile__form-button profile__form-button_invisible active-button">
          Войти
        </button>
      </form>
      <button type="button" className="profile__edit-button active-link">Редактировать</button>
      <a href="/signin" className="profile__exit-link active-link">Выйти из аккаунта</a>
    </section>
  );
}

export default Profile;