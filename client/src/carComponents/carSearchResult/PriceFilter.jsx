import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const PriceFilter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(9999);

  const applyFilter = () => {
    onFilter("price", { min: parseFloat(minPrice), max: parseFloat(maxPrice) });
  };

  const handleReset = () => {
    setMinPrice(1);
    setMaxPrice(9999);
    onFilter("price", { min: 1, max: 99999 });
  };

  return (
    <main className="w-full h-full flex flex-col items-center">
      <section className="flex flex-col lg:flex-row items-center justify-center w-full">
      <label className="mx-4 text-xs lg:text-md">
        Min{" "}
        <FontAwesomeIcon
          icon={faDollarSign}
          className="text-md"
          />
        :
        <input
          type="number"
          value={minPrice}
          className=" border-navy-blue border w-12 rounded-md"
          onChange={(e) => setMinPrice(e.target.value)}
          />
      </label>
      <label className="mx-4 text-xs lg:text-md">
        Max{" "}
        <FontAwesomeIcon
          icon={faDollarSign}
          className="text-md"
          />
        :
        <input
          type="number"
          value={maxPrice}
          className=" border-navy-blue border w-12 rounded-md"
          onChange={(e) => setMaxPrice(e.target.value)}
          />
      </label>
          </section>
      <section>

      <button onClick={applyFilter} className="mx-5 lg:mx-4 mt-2 lg:mt-4 border border-navy-blue rounded-md text-white bg-light-blue p-1 hover:bg-opacity-90 text-xs lg:text-md">Apply</button>
      <button onClick={handleReset} className="mx-5 lg:mx-4 mt-2 lg:mt-4 border border-navy-blue rounded-lg text-white bg-light-blue p-1 hover:bg-opacity-90 text-xs lg:text-md">Reset</button>
      </section>
    </main>
  );
};

export default PriceFilter;
