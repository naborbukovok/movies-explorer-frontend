import { React, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  }

  const handleBlur = () => {
    setIsInputFocused(false);
  }

  return (
    <div className="search-form">
      <div className={`search-form__fields-container ${isInputFocused ? "search-form__fields-container_focused" : ""}`}>
        <form className={`search-form__form ${isInputFocused ? "search-form__form_focused" : ""}`}>
        <div className="search-form__icon" />
          <input
            className="search-form__input"
            name="movie-title"
            type="text"
            placeholder="Фильм"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            className="search-form__submit-button active-button"
            type="submit"
          />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;