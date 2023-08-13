import serachIconPath from '../../images/search.svg';
import FilterCheckbox from '../FIlterCheckbox/FilterCheckbox';
import InputError from '../InputError/InputError';

function SearchForm({
  inputValue,
  onInputChange,
  onFormSubmit,
  isInputError,
  onCheckboxClick,
  isShortMovies,
}) {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__input-container">
          <img
            className="search-form__icon"
            src={serachIconPath}
            alt="Иконка поиска"
          />
          <input
            className="search-form__input"
            type="text"
            required
            placeholder="Фильм"
            onChange={onInputChange}
            value={inputValue}
          />
          <button
            className="search-form__sumbit-button"
            type="submit"
            onClick={onFormSubmit}
          >
            Найти
          </button>
        </div>
        <div className="search-form__divider"></div>
        <FilterCheckbox
          isShortMovies={isShortMovies}
          onCheckboxClick={onCheckboxClick}
        ></FilterCheckbox>
      </form>
      {isInputError && <InputError>{'Нужно ввести ключевое слово'}</InputError>}
    </section>
  );
}

export default SearchForm;
