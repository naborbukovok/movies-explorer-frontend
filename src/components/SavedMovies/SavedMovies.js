import React, { useState, useEffect } from "react";
import { filter } from "../../utils/filter.js";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  const { savedMovies, onMovieButtonClick } = props;

  // Параметры отображения списка карточек.
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(5);
  const [extraRows, setExtraRows] = useState(2);
  const [shownMovies, setShownMovies] = useState([]);
  const [isButton, setIsButton] = useState(false);

  // Значения фильтров.
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const addExtraRows = () => {
    setRows(rows + extraRows);
  }

  const handleFiltersChange = (newInputValue, newCheckboxValue) => {
    setInputValue(newInputValue);
    setCheckboxValue(newCheckboxValue);
  }

  useEffect(() => {
    const updateParams = () => {
      if (window.innerWidth >= 1280) {
        setColumns(4);
        setRows(4);
        setExtraRows(1);
      } else if (window.innerWidth >= 1024) {
        setColumns(3);
        setRows(4);
        setExtraRows(1);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
        setRows(4);
        setExtraRows(1);
      } else {
        setColumns(1);
        setRows(5);
        setExtraRows(2);
      }
    }

    window.addEventListener("resize", updateParams);
    updateParams();
    return () => window.removeEventListener("resize", updateParams) 
  }, [inputValue, checkboxValue]);

  useEffect(() => {
    const filteredSavedMovies = filter(inputValue, checkboxValue, savedMovies);
    if (filteredSavedMovies.length <= columns * rows) {
      setShownMovies(filteredSavedMovies);
      setIsButton(false);
    } else {
      setShownMovies(filteredSavedMovies.slice(0, columns * rows));
      setIsButton(true);
    }
  }, [inputValue, checkboxValue, savedMovies, columns, rows]);

  return (
    <div className="saved-movies">
      <SearchForm 
        onFiltersChange={handleFiltersChange}
        inputValue=""
        checkboxValue={false}
      />
      <MoviesCardList type="saved-movies" movies={shownMovies} savedMovies={savedMovies} onMovieButtonClick={onMovieButtonClick} />
      {isButton && <button className="saved-movies__more-button active-button" type="button" onClick={addExtraRows}>
        Ещё
      </button>}
    </div>
  );
}

export default SavedMovies;