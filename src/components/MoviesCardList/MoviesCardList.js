import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  const { type, movies, savedMovies, onMovieButtonClick } = props;

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
        <MoviesCard type="movie" key={i} movie={movie} isSaved={isSaved(movie)} onMovieButtonClick={onMovieButtonClick} />
      ))}
      {type === "saved-movies" && movies.map((movie, i) => (
        <MoviesCard type="saved-movie" key={i} isSaved={true} movie={movie} onMovieButtonClick={onMovieButtonClick} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
