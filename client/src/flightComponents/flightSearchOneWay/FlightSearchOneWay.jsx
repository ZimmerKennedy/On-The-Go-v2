import React from "react";
import DepartingFlightDetailsOneWay from "./DepartingFlightDetailsOneWay";
import Navbar from "../../Navbar";
// import FlightFilter from "../flightSearch/FlightFilter";
import DepartingFlightOneWay from "./DepartingFlightOneWay";
import { useSelector } from "react-redux";
import Fallback from "../../Fallback";
const FlightSearchOneWay = () => {
const flightData = useSelector((state) => state.userFlights);

  if (flightData.data.getAirFlightRoundTrip.error) {
    return <Fallback />;
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-200">
        <DepartingFlightDetailsOneWay />

        <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:justify-center">
          <section className="flex flex-row lg:flex-col lg:w-1/6 lg:mx-6 ">
            {/* <FlightFilter /> */}
          </section>
          <section className="flex flex-row flex-wrap  flex-1">
            <DepartingFlightOneWay />
          </section>
        </div>
      </main>
    </>
  );
};

export default FlightSearchOneWay;
