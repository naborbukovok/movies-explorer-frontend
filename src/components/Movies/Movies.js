import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList type="movies" />
      <button className="movies__more-button active-button" type="button">
        Ещё
      </button>
    </div>
  );
}

export default Movies;
