import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  onSaveMovie,
  onDeleteMovie,
  isSavedMoviesPage,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            isSavedMoviesPage={isSavedMoviesPage}
          ></MoviesCard>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
