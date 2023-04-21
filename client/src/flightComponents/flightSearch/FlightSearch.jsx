import React, { useState } from "react";
import DepartingFlightUserInfo from "./DepartingFlightUserInfo";
import Navbar from "../../Navbar";
// import FlightFilter from "./FlightFilter";
import DepartingFlightSearch from "./DepartingFlightSearch";
import ReturningFlightUserInfo from "./ReturningFlightUserInfo";
import ReturningFlightSearch from "./ReturningFlightSearch";
import { useSelector } from "react-redux";
import Fallback from "../../Fallback";
const FlightSearch = () => {
  const [renderReturningFlight, setRenderReturningFlight] = useState(false);
  const flightData = useSelector((state) => state.userFlights);

  if (flightData.data.getAirFlightRoundTrip.error) {
    return <Fallback />;
  }
  console.log(`flightData`, flightData);
  const handleDepartingFlightSelected = () => {
    setRenderReturningFlight(true);
  };

  return (
    <>
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Navbar />
        {!renderReturningFlight && <DepartingFlightUserInfo />}
        {renderReturningFlight && <ReturningFlightUserInfo />}
        <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:justify-center">
          <section className="flex flex-row lg:flex-col lg:w-1/6 lg:mx-6 ">
            {/* <FlightFilter /> */}
          </section>
          <section className="flex flex-row flex-wrap  flex-1">
            {!renderReturningFlight && (
              <DepartingFlightSearch
                onDepartingFlightSelected={handleDepartingFlightSelected}
              />
            )}
            {renderReturningFlight && <ReturningFlightSearch />}
          </section>
        </div>
      </main>
    </>
  );
};

export default FlightSearch;
