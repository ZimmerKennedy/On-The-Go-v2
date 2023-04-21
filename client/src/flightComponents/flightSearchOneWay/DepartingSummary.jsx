import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const DepartingSummary = () => {
  const { departingFlight } = useSelector((state) => state.roundtripFlightData);
  return (
    <div className="flex flex-col items-center w-full h-full  text-center">
      <main className="flex flex-col items-center justify-center">
        <h2 className="border-b-navy-blue border-2 border-transparent font-roboto font-bold xl:text-xl">
          Departing Flight
        </h2>
        <p className="font-thin text-sm xl:text-base">
          {departingFlight.slice_data.slice_0.airline.name}
        </p>
        {departingFlight.slice_data.slice_0.logo ? (
          <img
            src={departingFlight.slice_data.slice_0.logo}
            alt="Carrier Img"
            className="text-xs"
          />
        ) : null}

        <p className="mt-2 xl:mt-2">
          {departingFlight.slice_data.slice_0.info.duration}
          <img
            src="/assets/travelTime.png"
            className="w-10 h-10 xl:w-20 xl:h-14 object-contain"
          />
        </p>
      </main>
      <main className="flex flex-row justify-between w-full">
        <section>
          <div>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className="text-xl xl:text-2xl"
            />
          </div>
          <p className="font-roboto font-bold text-sm xl:text-xl">
            {departingFlight.slice_data.slice_0.departure.airport.name}
          </p>
          <p className="font-thin text-xs xl:text-base">
            {departingFlight.slice_data.slice_0.departure.datetime.date_display}
            <br></br>
            {departingFlight.slice_data.slice_0.departure.datetime.time_12h}
          </p>
        </section>

        <section>
          <p>
            <FontAwesomeIcon
              icon={faPlaneArrival}
              className="text-xl xl:text-2xl"
            />
          </p>
          <p className="font-roboto font-bold text-sm  xl:text-xl">
            {departingFlight.slice_data.slice_0.arrival.airport.name}
          </p>
          <p className="font-thin text-xs xl:text-base">
            {departingFlight.slice_data.slice_0.arrival.datetime.date_display}
            <br></br>
            {departingFlight.slice_data.slice_0.arrival.datetime.time_12h}
          </p>
        </section>
      </main>
      <p className="font-bold font-roboto text-sm xl:text-base">
        {departingFlight.price_details.baseline_symbol}
        {departingFlight.price_details.baseline_total_fare_per_ticket}
      </p>
    </div>
  );
};

export default DepartingSummary;
