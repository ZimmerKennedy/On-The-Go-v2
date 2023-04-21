import React, { useState } from "react";

const FormInput = ({
  destination,
  fetchHotelLocation,
  hotelLocations,
  setDestination,
}) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const handleDestinationSelection = (city) => {
    setDestination(city);
    setShowDropdown(false); 
  };

  const handleChange = (e) => {
    fetchHotelLocation(e);
    setShowDropdown(true); 
  };

  return (
    <div className="flex flex-col">
      <label className="  font-bold text-sm lg:text-xl pt-4 mb-2 text-white text-shadow-lg font-roboto">
        Destination
      </label>
      <input
        className=" border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
        type="text"
        placeholder="Enter destination or hotel name"
        onChange={handleChange}
        value={destination}
      />
      {destination?.length > 1 && showDropdown && (
        <div
          className="absolute bg-white border border-gray-300 rounded-md p-2 mt-24 max-h-64 overflow-y-auto z-10"
          style={{ minWidth: "200px" }}
        >
          {Object.values(
            hotelLocations?.data?.getHotelAutoSuggestV2?.results?.result
              ?.cities ?? {}
          ).map((location, index) => (
            <div key={index} className="mb-2">
              <div
                className=" py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                onClick={() => handleDestinationSelection(location.city)}
              >
                {location.city}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormInput;