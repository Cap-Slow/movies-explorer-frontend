import serachIconPath from '../../images/search.svg';
import FilterCheckbox from '../FIlterCheckbox/FilterCheckbox';

function SearchForm() {
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
          />
          <button className="search-form__sumbit-button" type="submit">
            Найти
          </button>
        </div>
        <div className="search-form__divider"></div>
        <FilterCheckbox></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
