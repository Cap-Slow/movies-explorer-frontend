import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState } from 'react';

function Movies({
  inputValue,
  onInputChange,
  isError,
  filteredMovies,
  isFormSubmitted,
  onMoviesSearch,
  isLoading,
  isShortMovies,
  onCheckboxClick,
  displayedMovies,
  loadMoreMovies,
  onSaveMovie,
  onDeleteMovie,
}) {
  const [isInputError, setIsInputError] = useState(false);

  function handleinputValueChange(e) {
    onInputChange(e);
    setIsInputError(false);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    if (inputValue === '') {
      setIsInputError(true);
      return;
    }
    onMoviesSearch(inputValue);
  }
  return (
    <>
      <section className="movies">
        <SearchForm
          onInputChange={handleinputValueChange}
          onFormSubmit={handleSearchFormSubmit}
          isInputError={isInputError}
          inputValue={inputValue}
          isShortMovies={isShortMovies}
          onCheckboxClick={onCheckboxClick}
        />
        {isLoading && <Preloader />}
        {isError === true && (
          <p className="movies__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        )}
        {filteredMovies.length === 0 && isFormSubmitted && !isLoading && (
          <p className="movies__not-found-element">Ничего не найдено.</p>
        )}
        {filteredMovies.length > 0 && (
          <MoviesCardList
            movies={displayedMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
          ></MoviesCardList>
        )}
        {displayedMovies.length < filteredMovies.length && (
          <button className="movies__load-button" onClick={loadMoreMovies}>
            Ещё
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
