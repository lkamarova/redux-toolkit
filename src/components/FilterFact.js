const FilterFact = ({ value, onChange }) => {
    return (
      <div className="filterWrap">
      <span>Введите цифру от 1 до 5</span>
      
        <input
          className="filter"
          type="number"
          min={1}
          max={5}
          id="number"
          name="number"
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
        />
      </div>
    );
  };
  
  export default FilterFact;