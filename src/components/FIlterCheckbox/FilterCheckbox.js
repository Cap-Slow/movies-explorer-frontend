function FilterCheckbox({ isShortMovies, onCheckboxClick }) {
  return (
    <label className="filter-checkbox__container">
      <input
        className="filter-checkbox__toggler"
        type="checkbox"
        id="short-films"
        name="short-films"
        onChange={onCheckboxClick}
      />
      <span
        className={`filter-checkbox__visible-element ${
          isShortMovies ? 'filter-checkbox__visible-element_checked' : ''
        }`}
      ></span>
      <span className="filter-checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
