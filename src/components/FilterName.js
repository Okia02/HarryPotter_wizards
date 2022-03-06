const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <fieldset className="filterName">
      <label className="filterName__label" htmlFor="name">
        Personaje:
      </label>
      <input
        className="filterName__input"
        type="search"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleInput}
        placeholder="Escribe aquí..."
      />
    </fieldset>
  );
};
export default FilterName;
