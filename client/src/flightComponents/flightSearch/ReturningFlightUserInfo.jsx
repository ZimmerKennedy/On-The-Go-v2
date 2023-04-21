import React from "react";
import { useSelector } from "react-redux";

const ReturningFlightUserInfo = () => {
  const flightData = useSelector((state) => state.userFlights);

  const returnInfo =
    flightData.data.getAirFlightRoundTrip.results.result.search_data.search_1;
  return (
    <main
       className="flex flex-row my-8 lg:w-1/2 h-32 bg-slate-50 justify-center items-center lg:gap-14 border-light-blue rounded-md shadow-lg font-mono text-center"
      style={{ boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" }}
    >
      <section className="text-xs lg:text-xl flex flex-col w-full h-full justify-center pl-2 lg:pl-0 lg:items-center border-r lg:border-r-2 border-light-blue">
        <div>Origin</div>
        <div>{returnInfo.origin.name}</div>
        <div>{returnInfo.origin.city}</div>
      </section>
      <section className="text-lg lg:text-xl flex flex-col w-full h-full items-center justify-center">
        <div>Returning Flight</div>
        <div>{returnInfo.departure_date}</div>
      </section>
      <section className="text-xs lg:text-xl flex flex-col w-full h-full lg:items-center justify-center pl-2 lg:pl-0 border-l lg:border-l-2 border-light-blue">
        <div>Destination </div>
        <div>{returnInfo.destination.name}</div>
        <div>{returnInfo.destination.city}</div>
      </section>
    </main>
  );
};

export default ReturningFlightUserInfo;
