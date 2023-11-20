import { React, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm(props) {
  const { filterMovies } = props;

  const [inputValue, setInputValue] = useState(localStorage.getItem("input") ? localStorage.getItem("input") : "");
  const [isChecked, setIsChecked] = useState((localStorage.getItem("checkbox") && (localStorage.getItem("checkbox") === "true")) ? true : false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    filterMovies(inputValue, isChecked);
    localStorage.setItem("input", inputValue);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputFocus = () => {
    setIsInputFocused(true);
  }

  const handleInputBlur = () => {
    setIsInputFocused(false);
  }

  const handleCheckboxChange = (e) => {
    localStorage.setItem("checkbox", e.target.checked ? "true" : "false");
    filterMovies(inputValue, e.target.checked);
    setIsChecked(e.target.checked);
  }

  return (
    <div className="search-form">
      <div className={`search-form__fields-container ${ isInputFocused ? "search-form__fields-container_focused" : "" }`}>
        <form className={`search-form__form ${ isInputFocused ? "search-form__form_focused" : "" }`} onSubmit={ handleSearchFormSubmit }>
          <div className="search-form__icon" />
          <input
            className="search-form__input"
            name="movie-title"
            type="text"
            placeholder="Фильм"
            value={ inputValue }
            onChange={ handleInputChange }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur }
          />
          <button
            className="search-form__submit-button active-button"
            type="submit"
          />
        </form>
        <FilterCheckbox checked={ isChecked } onChange={ handleCheckboxChange } />
      </div>
    </div>
  );
}

export default SearchForm;