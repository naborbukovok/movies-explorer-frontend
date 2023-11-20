import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { checked, onChange } = props;

  return (
    <label className="filter-checkbox">
      <input type="checkbox" name="checkbox" checked={checked} onChange={onChange} className="filter-checkbox__invisible" />
      <span className="filter-checkbox__visible active-button"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
