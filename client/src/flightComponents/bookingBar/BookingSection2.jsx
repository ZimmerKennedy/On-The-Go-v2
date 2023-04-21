import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchAirportLocations } from "./airportLocationsSlice";
import { useDispatch, useSelector } from "react-redux";
const BookingSection2 = ({
  destination,
  origin,
  departingDate,
  returningDate,
  tripType,
  setDestination,
  setOrigin,
  setDepartingDate,
  setReturningDate
}) => {
  const airportLocations = useSelector((state) => state.airportLocationsData);
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState({
    destination: false,
    origin: false,
  });

  

  const fetchAirportLocation = (e, isOrigin) => {
    const keyword = e.target.value;

    if (isOrigin) {
      setOrigin(keyword);
      dispatch(fetchAirportLocations(keyword));
    } else {
      setDestination(keyword);
      dispatch(fetchAirportLocations(keyword));
    }
  };

  const handleLocationSelection = (locationType, airport, isOrigin) => {
    if (locationType === "origin") {
      setOrigin(airport);
      setSelectedLocation({ ...selectedLocation, origin: isOrigin });
    } else if (locationType === "destination") {
      setDestination(airport);
      setSelectedLocation({ ...selectedLocation, destination: !isOrigin });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center mx-2 mb-4 gap-2 lg:mx-4">
      <div className="flex flex-col w-full">
        <label className="font-bold text-xl lg:ml-2 mb-2 text-white text-shadow-lg font-roboto">
          Leaving From:
        </label>
        <input
          placeholder="Enter city or airport"
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          type="text"
          onChange={(e) => fetchAirportLocation(e, true)}
          value={origin}
        />

        {airportLocations.data &&
          airportLocations.data.length > 0 &&
          !selectedLocation.origin &&
          !selectedLocation.destination && (
            <div
              className=" h-full lg:h-1/2 absolute bg-white border border-gray-300 rounded-md p-2 mt-20 max-h-64 overflow-y-auto z-10"
              style={{ minWidth: "200px" }}
            >
              {airportLocations.data
                ? airportLocations.data.map((airport) => (
                    <div
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                      key={`${airport.cityCode}-${airport.displayName}`}
                      onClick={() =>
                        handleLocationSelection(
                          "origin",
                          airport.displayName,
                          true
                        )
                      }
                    >
                      {airport.displayName}
                    </div>
                  ))
                : null}
            </div>
          )}
      </div>

      <div className="flex flex-col w-full">
        <label className="font-bold text-xl lg:ml-2 mb-2 text-white text-shadow-lg font-roboto">
          Going To:
        </label>
        <input
          className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          type="text"
          onChange={(e) => fetchAirportLocation(e, false)}
          placeholder="Enter city or airport"
          value={destination}
        />
        {airportLocations.data &&
          airportLocations.data.length > 0 &&
          selectedLocation.origin &&
          !selectedLocation.destination && (
            <div
              className=" h-full lg:h-1/2 absolute bg-white border border-gray-300 rounded-md p-2 mt-20 max-h-64 overflow-y-auto z-10"
              style={{ minWidth: "200px" }}
            >
              {airportLocations.data
                ? airportLocations.data.map((airport) => (
                    <div
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent"
                      key={`${airport.cityCode}-${airport.displayName}`}
                      onClick={() =>
                        handleLocationSelection(
                          "destination",
                          airport.displayName,
                          false
                        )
                      }
                    >
                      {airport.displayName}
                    </div>
                  ))
                : null}
            </div>
          )}
      </div>

      <div className="flex flex-col w-full">
        <label className="font-bold text-xl mb-2 text-white text-shadow-lg font-roboto">
          Departing:
        </label>
        <DatePicker
            name="departingDate"
            minDate={new Date()}
            selected={departingDate}
            onChange={(date) => setDepartingDate(date)}
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
      </div>

      <div className="flex flex-col w-full">
        {tripType === "Roundtrip" && (
          <>
            <label className="lg:ml-2 font-bold text-xl mb-2 text-white text-shadow-lg font-roboto">
              Returning:
            </label>
            <DatePicker
            name="returningDate"
            minDate={departingDate}
            selected={returningDate}
            onChange={(date) => setReturningDate(date)}
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
          </>
        )}
      </div>
    </section>
  );
};

export default BookingSection2;
