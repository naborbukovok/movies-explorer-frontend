import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  const { type, movies, savedMovies, onSaveButtonClick } = props;

  const isSaved = (movie) => {
    let isSaved = false; 
    for (let i = 0; i < savedMovies.length; ++i) {
      if (savedMovies[i].movieId === movie.id) {
        isSaved = true;
        break;
      }
    }
    return isSaved;
  }

  return (
    <ul className="movies-card-list">
      {type === "movies" && movies.map((movie, i) => (
        <MoviesCard type="movie" key={i} movie={movie} isSaved={isSaved(movie)} onSaveButtonClick={onSaveButtonClick} />
      ))}

      {type === "saved-movies" && movies.map((movie, i) => isSaved(movie) && (
        <MoviesCard type="saved-movie" key={i} isSaved={true} movie={movie} onSaveButtonClick={onSaveButtonClick} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
