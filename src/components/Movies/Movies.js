import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies(props) {
  const { isPreloader, filterMovies, movies, savedMovies, onSaveButtonClick } = props;
  const [isButton, setIsButton] = useState(false);
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(5);
  const [extraRows, setExtraRows] = useState(2);
  const [shownMovies, setShownMovies] = useState([]);

  
  const addExtraRows = () => {
    setRows(rows + extraRows);
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
  }, []);

  useEffect(() => {
    if (movies.length <= columns * rows) {
      setShownMovies(movies);
      setIsButton(false);
    } else {
      setShownMovies(movies.slice(0, columns * rows));
      setIsButton(true);
    }
  }, [movies, rows, columns]);

  return (
    <div className="movies">
      <SearchForm filterMovies={filterMovies} />
      {isPreloader
        ? <Preloader />
        : <MoviesCardList type="movies" movies={shownMovies} savedMovies={savedMovies} onSaveButtonClick={onSaveButtonClick} />
      }
      {isButton && <button className="movies__more-button active-button" type="button" onClick={ addExtraRows }>
        Ещё
      </button>}
    </div>
  );
}

export default Movies;
