import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

function SavedMovies({
  savedMovies,
  onMoviesSearch,
  inputValue,
  onInputChange,
  isShortMovies,
  onCheckboxClick,
  onDeleteMovie,
  isSavedMoviesPage,
  isLoading,
}) {
  const [isInputError, setIsInputError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleinputValueChange(e) {
    onInputChange(e);
    setIsInputError(false);
    setIsFormSubmitted(false);
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setIsFormSubmitted(true);
    onMoviesSearch(inputValue);
  }

  return (
    <>
      <section className="saved-movies">
        <SearchForm
          onInputChange={handleinputValueChange}
          onFormSubmit={handleSearchFormSubmit}
          isInputError={isInputError}
          inputValue={inputValue}
          isShortMovies={isShortMovies}
          onCheckboxClick={onCheckboxClick}
        />
        {isLoading && <Preloader />}

        {savedMovies.length === 0 && isFormSubmitted && (
          <p className="movies__not-found-element">Ничего не найдено.</p>
        )}
        <MoviesCardList
          movies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          isSavedMoviesPage={isSavedMoviesPage}
        ></MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
