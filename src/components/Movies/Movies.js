import React, { useState, useEffect } from "react";
import { filter } from "../../utils/filter.js";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies(props) {
  const { isPreloader, beatfilmMovies, savedMovies, onMovieButtonClick } = props;

  // Параметры отображения списка карточек.
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(5);
  const [extraRows, setExtraRows] = useState(2);
  const [shownMovies, setShownMovies] = useState([]);
  const [isButton, setIsButton] = useState(false);

  // Значения фильтров.
  const [inputValue, setInputValue] = useState(localStorage.getItem("input") ? localStorage.getItem("input") : "");
  const [checkboxValue, setCheckboxValue] = useState((localStorage.getItem("checkbox") && (localStorage.getItem("checkbox") === "true")) ? true : false);
  const [filteredMovies, setFilteredMovies] = useState(localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")) : []);

  const addExtraRows = () => {
    setRows(rows + extraRows);
  }

  const handleFiltersChange = (newInputValue, newCheckboxValue) => {
    setInputValue(newInputValue);
    setCheckboxValue(newCheckboxValue);
    localStorage.setItem("input", newInputValue);
    localStorage.setItem("checkbox", newCheckboxValue);

    const newFilteredMovies = filter(newInputValue, newCheckboxValue, beatfilmMovies);
    setFilteredMovies(newFilteredMovies);
    localStorage.setItem("movies", JSON.stringify(newFilteredMovies));
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
    if (filteredMovies.length <= columns * rows) {
      setShownMovies(filteredMovies);
      setIsButton(false);
    } else {
      setShownMovies(filteredMovies.slice(0, columns * rows));
      setIsButton(true);
    }
  }, [filteredMovies, columns, rows]);

  return (
    <div className="movies">
      <SearchForm 
        onFiltersChange={handleFiltersChange}
        inputValue={inputValue}
        checkboxValue={checkboxValue}
      />
      {isPreloader
        ? <Preloader />
        : <MoviesCardList type="movies" movies={shownMovies} savedMovies={savedMovies} onMovieButtonClick={onMovieButtonClick} />
      }
      {isButton && <button className="movies__more-button active-button" type="button" onClick={addExtraRows}>
        Ещё
      </button>}
    </div>
  );
}

export default Movies;
