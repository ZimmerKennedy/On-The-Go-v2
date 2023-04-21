import React, { useState } from "react";

const TransmissionFilter = ({ onFilter }) => {
  const [transmission, setTransmission] = useState("");

  const handleFilter = (value) => {
    setTransmission(value);
    onFilter("transmission", value);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-evenly font-roboto">
      <button
        onClick={() => handleFilter("Automatic")}
        className={`text-xs lg:text-md mb-2 border p-1 border-light-blue rounded-md ${
          transmission === "Automatic" ? "bg-light-blue text-white" : ""
        }`}
      >
        Automatic
      </button>
      <button
        onClick={() => handleFilter("Manual")}
        className={`text-xs lg:text-md mb-2 border p-1 border-light-blue rounded-md ${
          transmission === "Manual" ? "bg-light-blue text-white" : ""
        }`}
      >
        Manual
      </button>
    </div>
  );
};

export default TransmissionFilter;
