function MoviesCard({ title, duration, imageLink, children }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={imageLink} alt="Постер фильма" />
      <div className="movies-card__description">
        <p className="movies-card__title">{title}</p>
        <div className="movies-card__duration-container">
          <p className="movies-card__duration-text">{duration}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MoviesCard;
