import React from "react";
import { Link } from "react-router-dom";

const FilterPrice = () => {
  return (
    <div className="search-filter-main">
      <div className="search-f-right">
        <Link to="#">Rates are in (BDT)</Link>
        <Link className="active" to="#">
          Show Price : <span>Price For Whole Stay</span>
        </Link>
      </div>
    </div>
  );
};

export default FilterPrice;
