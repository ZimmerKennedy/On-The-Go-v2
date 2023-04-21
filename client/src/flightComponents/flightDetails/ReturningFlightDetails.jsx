import React from 'react'
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";


  const ReturningFlightDetails = () => {
    
    const {returningFlight} = useSelector((state) => state.roundtripFlightData)
    console.log(`returningFlight`,returningFlight)
    return (
      <div className="flex flex-col items-center w-full h-full  text-center">
        <main className="flex flex-col items-center justify-center">
          <h2 className="border-b-navy-blue border-2 border-transparent font-roboto font-bold xl:text-xl">
            Returning Flight
          </h2>
          <p className="font-thin text-sm xl:text-base">
            {returningFlight.slice_data.slice_1.airline.name}
          </p>
          {returningFlight.slice_data.slice_1.logo ? (
            <img
              src={returningFlight.slice_data.slice_1.logo}
              alt="Carrier Img"
              className="text-xs"
            />
          ) : null}

          <p className="mt-2 xl:mt-2">
          {returningFlight.slice_data.slice_1.info.duration}
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
              {returningFlight.slice_data.slice_1.departure.airport.name}
            </p>
            <p className="font-thin text-xs xl:text-base">
               {returningFlight.slice_data.slice_1.departure.datetime.date_display}
              <br></br>
              {returningFlight.slice_data.slice_1.departure.datetime.time_12h}
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
              {returningFlight.slice_data.slice_1.arrival.airport.name}
            </p>
            <p className="font-thin text-xs xl:text-base">
              {returningFlight.slice_data.slice_1.arrival.datetime.date_display}
              <br></br>
              {returningFlight.slice_data.slice_1.arrival.datetime.time_12h}
            </p>
          </section>
        </main>
        <p className="font-bold font-roboto text-sm xl:text-base">

          {returningFlight.price_details.baseline_symbol}
          {returningFlight.price_details.baseline_total_fare_per_ticket}
        </p>
      </div>
    
    );
  };

  export default ReturningFlightDetails

