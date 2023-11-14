import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__invisible" />
      <span className="filter-checkbox__visible active-button"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
