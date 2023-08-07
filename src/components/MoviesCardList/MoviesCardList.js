function MoviesCardList({ children, isMoviesPage }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">{children}</ul>
      <button
        className={`movies-card-list__load-button ${
          isMoviesPage ? '' : 'movies-card-list__load-button_display_hidden'
        }`}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
