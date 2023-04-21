import React from "react";
import Navbar from "../../Navbar";
import PriceSummary from "./PriceSummary";
import DepartingFlightDetails from "./DepartingFlightDetails";
import ReturningFlightDetails from "./ReturningFlightDetails";

const FlightDetails = () => {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/flightDetailsBg.jpg')` }}
    >
      <Navbar />
      <div className="flex flex-col xl:flex-row xl:justify-evenly xl:gap-6 h-full">
        <section className="mx-4 flex flex-col xl:gap-y-2 xl:w-[70%]  xl:h-full ">
          <div
            className="xl:h-[40%] flex flex-row lg:gap-10 shadow-lg rounded-md p-4 my-4 lg:m-2 lg:my-4 hover:shadow-2xl hover:shadow-navy-blue"
            style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}
          >
            <DepartingFlightDetails />
          </div>
          <div
            className="xl:h-[40%] flex flex-row lg:gap-10 shadow-lg rounded-md p-4 my-4 lg:m-2 lg:my-4 hover:shadow-2xl hover:shadow-navy-blue"
            style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}
          >
            <ReturningFlightDetails />
          </div>
        </section>
        <section className="m-4 xl:mr-4 xl:my-4 shadow-lg rounded-md hover:shadow-2xl hover:shadow-navy-blue xl:h-[40%] xl:w-[20%] "
        style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}
        >
          <PriceSummary showButton={true}/>
        </section>
      </div>
    </main>
  );
};

export default FlightDetails;
