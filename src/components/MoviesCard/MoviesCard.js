import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, isSavedMoviesPage }) {
  const currentUser = useContext(CurrentUserContext);
  const isSaved = movie.owner === currentUser._id;
  const savedMovieButtonClassName = `movies-card__save-element ${
    isSaved ? 'movies-card__saved-icon' : 'movies-card__save-button'
  } ${isSavedMoviesPage ? 'movies-card__delete-icon' : ''}`;
  const imagePath = movie.image.url
    ? `https://api.nomoreparties.co${movie.image.url}`
    : movie.image;
  const duration = formatTime(movie.duration);

  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  }

  function saveMovie() {
    onSaveMovie(movie);
  }

  function deleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <li className="movies-card">
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          className="movies-card__image"
          src={imagePath}
          alt="Постер фильма"
        />
      </a>
      <div className="movies-card__description">
        <p className="movies-card__title">{movie.nameRU}</p>
        <div className="movies-card__duration-container">
          <p className="movies-card__duration-text">{duration}</p>
        </div>
      </div>
      <button
        className={savedMovieButtonClassName}
        onClick={() => {
          if (isSaved) {
            deleteMovie(movie);
          } else {
            saveMovie(movie);
          }
        }}
      >
        {isSaved ? '' : 'Сохранить'}
      </button>
    </li>
  );
}

export default MoviesCard;
