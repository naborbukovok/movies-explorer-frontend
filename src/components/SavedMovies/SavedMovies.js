import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  const { filterMovies, movies, savedMovies, onSaveButtonClick } = props;

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
    if (savedMovies.length <= columns * rows) {
      setShownMovies(movies.filter((movie) => {
        let isSaved = false; 
        for (let i = 0; i < savedMovies.length; ++i) {
          if (savedMovies[i].movieId === movie.id) {
            isSaved = true;
            break;
          }
        }
        return isSaved;
      }));
      setIsButton(false);
    } else {
      setShownMovies(movies.filter((movie) => {
        let isSaved = false; 
        for (let i = 0; i < savedMovies.length; ++i) {
          if (savedMovies[i].movieId === movie.id) {
            isSaved = true;
            break;
          }
        }
        return isSaved;
      }).slice(0, columns * rows));
      setIsButton(true);
    }
  }, [movies, savedMovies, rows, columns]);

  return (
    <div className="saved-movies">
      <SearchForm filterMovies={filterMovies} />
      <MoviesCardList type="saved-movies" movies={shownMovies} savedMovies={savedMovies} onSaveButtonClick={onSaveButtonClick} />
      {isButton && <button className="saved-movies__more-button active-button" type="button" onClick={ addExtraRows }>
        Ещё
      </button>}
    </div>
  );
}

export default SavedMovies;