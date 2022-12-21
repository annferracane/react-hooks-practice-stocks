import React, { useState } from "react";

function SearchBar({ sortStocks, filterStocks }) {

  const [alphChecked, setAlphChecked] = useState(false);
  const [pricChecked, setPriceChecked] = useState(false);

  function sortHandler(e) {
    const sortType = e.target.value;
    if(sortType === "Alphabetically") {
      setAlphChecked(true);
      setPriceChecked(false);
    } else {
      setAlphChecked(false);
      setPriceChecked(true);
    }

    sortStocks(sortType);
  }

  function filterHandler(e) {
    filterStocks(e.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={ alphChecked }
          onChange={ sortHandler }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={ pricChecked }
          onChange={ sortHandler }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ filterHandler }>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
