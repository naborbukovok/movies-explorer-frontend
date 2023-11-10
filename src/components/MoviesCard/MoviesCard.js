import movieImageTemplate from "../../images/movie-image-template.jpg";

import "./MoviesCard.css";

function MoviesCard(props) {
  const { type, movie } = props;

  return (
    <li className="movies-card">
      <a
        rel="noreferrer"
        target="_blank"
        className="movies-card__link active-link"
        href="https://youtu.be/L2WXYK1ZKjs"
      >
        <img
          className="movies-card__image"
          src={movieImageTemplate}
          alt="Постер фильма"
        />
      </a>
      <div className="movies-card__title-line">
        <h2 className="movies-card__title">{movie.title}</h2>
        {type === "movie" && (
          <button
            className={`active-button movies-card__save-button
                ${props.isSaved && "movies-card__save-button_enabled"}`}
            type="button"
          />
        )}
        {type === "saved-movie" && (
          <button className="movies-card__delete-button active-button" type="button" />
        )}
      </div>
      <p className="movies-card__duration">{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
