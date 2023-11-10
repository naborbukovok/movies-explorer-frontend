import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__fields-container">
        <form className="search-form__form">
        <div className="search-form__icon" />
          <input
            className="search-form__input"
            name="movie-title"
            type="text"
            placeholder="Фильм"
            required
          />
          <button
            className="search-form__submit-button active-button"
            type="submit"
          />
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;