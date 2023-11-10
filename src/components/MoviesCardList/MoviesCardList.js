import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  // const { movies } = props;
  const { type } = props;

  const movies = [
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: false
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: true
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: true
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: false
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: true
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: false
    },
    {
      title: "Страна Саша",
      duration: "1ч23м",
      isSaved: false
    }
  ];

  return (
    <section className="movies-card-list">
      {type === "movies" && movies.map((movie, i) => (
        <MoviesCard type="movie" key={i} movie={movie} isSaved={movie.isSaved} />
      ))}

      {type === "saved-movies" && movies.map((movie, i) => movie.isSaved && (
        <MoviesCard type="saved-movie" key={i} movie={movie} />
      ))}
    </section>
  );
}

export default MoviesCardList;
