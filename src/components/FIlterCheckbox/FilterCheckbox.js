function FilterCheckbox() {
  return (
    <label className="filter-checkbox__container">
      <input
        className="filter-checkbox__toggler"
        type="checkbox"
        id="short-films"
        name="short-films"
      />
      <span className="filter-checkbox__visible-element"></span>
      <span className="filter-checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
