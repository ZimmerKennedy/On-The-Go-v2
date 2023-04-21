import React from "react";

const LocationInput = ({
  renderReturnLocationInput,
  pickupLocation,
  returnLocation,
  selectedLocation,
  fetchCarRentalLocation,
  handleLocationSelection,
  carLocations,
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="font-bold text-sm lg:text-lg pt-4 mb-2 text-white text-shadow-lg font-roboto">
          Pick-Up Location:
        </label>
        <input
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          type="text"
          placeholder="Enter city or airport"
          value={pickupLocation.cityString || pickupLocation.airportCode}
          onChange={(e) => fetchCarRentalLocation(e, "pickup")}
        />
        {pickupLocation.length > 0 && !selectedLocation.pickup && (
          <div
            className="absolute bg-white border border-gray-300 rounded-md p-2 mt-24 max-h-64 overflow-y-auto z-10"
            style={{ minWidth: "200px" }}
          >
            {Object.values(
              carLocations?.data?.getCarAutoComplete?.results?.city_data ?? {}
            ).map((location, index) => (
              <div key={index} className="mb-2">
                <div
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                  onClick={() =>
                    handleLocationSelection("pickup", location.city, "")
                  }
                >
                  {location.city}
                </div>
                {Object.entries(location.airport_data ?? {}).map(
                  ([key, airport]) => (
                    <div
                      key={key}
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                      onClick={() =>
                        handleLocationSelection(
                          "pickup",
                          airport.airport_name,
                          airport.airport_code
                        )
                      }
                    >{airport.airport_name}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {renderReturnLocationInput && (
        <div className="flex flex-col mt-2 lg:mt-0">
          <label className="font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
            Drop-off Location:
          </label>
          <input
            placeholder="Enter city or airport"
            type="text"
            value={returnLocation.cityString || returnLocation.airportCode}
            name="returnLocation"
            onChange={(e) => fetchCarRentalLocation(e, "return")}
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
          {returnLocation.length > 0 && !selectedLocation.return && (
            <div
              className="absolute bg-white border border-gray-300 rounded-md p-2 mt-24 max-h-64 overflow-y-auto z-10"
              style={{ minWidth: "200px" }}
            >
              {Object.values(
                carLocations?.data?.getCarAutoComplete?.results?.city_data ?? {}
              ).map((location, index) => (
                <div key={index} className="mb-2">
                  {/* Display city */}
                  <div
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                    onClick={() =>
                      handleLocationSelection("return", location.city, "")
                    }
                  >
                    {location.city}
                  </div>

                  {/* Display airports */}
                  {Object.entries(location.airport_data ?? {}).map(
                    ([key, airport]) => (
                      <div
                        key={key}
                        className="py-1 px-2 hover:bg-gray-200 cursor-pointer my-1 border-2 border-b-navy-blue border-transparent"
                        onClick={() =>
                          handleLocationSelection(
                            "return",
                            airport.airport_name,
                            airport.airport_code
                          )
                        }
                      >
                        {airport.airport_name}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
