import React, {useState} from "react";

const CarTypeFilter = ({ onFilter }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleClick = (value) => {
    setSelectedType(value === selectedType ? "" : value);

    if (value === selectedType) {
      setSelectedType("");
      onFilter("carType", "");
    } else {
      onFilter("carType", value);
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row lg:justify-evenly font-roboto items-center p-2">
      <button
        type="button"
        value="Car"
        className={`text-xs   border p-1 border-light-blue rounded-md ${
          selectedType === "Car" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("Car")}
      >
        Car
      </button>
      <br />
      <button
        type="button"
        value="SUV"
        className={`text-xs   border p-1 border-light-blue rounded-md ${
          selectedType === "SUV" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("SUV")}
      >
        SUV
      </button>
      <br />
      <button
        type="button"
        value="Pickup"
        className={`text-xs   border p-1 border-light-blue rounded-md ${
          selectedType === "Pickup" ? "bg-light-blue text-white" : ""
        }`}
        onClick={() => handleClick("Pickup")}
      >
        Pickup Truck
      </button>
    </div>
  );
};

export default CarTypeFilter;