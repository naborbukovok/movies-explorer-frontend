import React, { useEffect, useState } from "react"

import "./MoviesCard.css";

function MoviesCard(props) {
  const { type, movie, onSaveButtonClick } = props;

  const [isSaved, setIsSaved] = useState(false);

  const durationString = (
    (Math.floor(movie.duration / 60) !== 0)
      ? `${Math.floor(movie.duration / 60)}ч `
      : ""
  ) + (
    (movie.duration % 60 !== 0)
      ? `${movie.duration % 60}м`
      : ""
  );

  const handleSaveButtonClick = () => {
    onSaveButtonClick(movie, isSaved);
    setIsSaved(!isSaved);
  }

  useEffect(() => {
    setIsSaved(props.isSaved);
  }, [props.isSaved]);

  return (
    <li className="movies-card">
      <a
        rel="noreferrer"
        target="_blank"
        className="movies-card__link active-link"
        href={movie.trailerLink}
      >
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={`Постер фильма ${movie.nameRU}`}
        />
      </a>
      <div className="movies-card__title-line">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        {type === "movie" && (
          <button
            className={`active-button movies-card__save-button
                ${isSaved && "movies-card__save-button_enabled"}`}
            type="button"
            onClick={handleSaveButtonClick}
          />
        )}
        {type === "saved-movie" && (
          <button
            className="movies-card__delete-button active-button"
            type="button"
            onClick={handleSaveButtonClick}
          />
        )}
      </div>
      <p className="movies-card__duration">{durationString}</p>
    </li>
  );
}

export default MoviesCard;
