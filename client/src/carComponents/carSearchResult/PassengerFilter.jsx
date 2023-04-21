import React, { useState } from "react";

const PassengerFilter = ({ onFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (value) => {
    setSelectedOption(value === selectedOption ? "" : value);
    onFilter("passengers", value);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-evenly font-roboto">
      <button
        type="button"
        value="4"
        className={`text-xs lg:text-m border p-1 border-light-blue rounded-md ${
          selectedOption === "4" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("4")}
      >
        2+
      </button>
      <br />
      <button
        type="button"
        value="5-6"
        className={`text-xs lg:text-m border p-1 border-light-blue rounded-md ${
          selectedOption === "5-6" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("5-6")}
      >
        5+
      </button>
      <br />
      <button
        type="button"
        value="7+"
        className={`text-xs lg:text-m border p-1 border-light-blue rounded-md ${
          selectedOption === "7+" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("7+")}
      >
        7+
      </button>
    </div>
  );
};

export default PassengerFilter;
