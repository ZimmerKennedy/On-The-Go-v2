import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { setReturningFlightData } from "./setRoundtripFlightUser";
const ReturningFlightSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.userFlights);

  const itineraries =
    flightData.data.getAirFlightRoundTrip.results.result.itinerary_data;

  const handleFlightCardClick = (data) => {
    dispatch(setReturningFlightData(data));
    navigate("/flight-details");
  };
  return (
    <div className="flex flex-row flex-wrap w-full">
      {Object.entries(itineraries).map(([key, data], index) => (
        <div
          key={index}
          onClick={() => {
            handleFlightCardClick({
              ...data,
            });
          }}
          className="w-full lg:w-3/4 shadow-lg rounded-md my-2 hover:shadow-2xl hover:shadow-navy-blue bg-gray-50 overflow-hidden"
        >
         <div className="flex flex-row lg:justify-around w-full items-center h-full ">
            <section className="lg:text-2xl text-xs py-6 lg:py-4 lg:pr-10 font-mono text-center border-r lg:border-r-2 border-light-blue">
              <p>Origin</p>
              <p>{data.slice_data.slice_1.departure.airport.name}</p>
              <p className="text-xs">
                {data.slice_data.slice_1.departure.datetime.date_display}
              </p>
              <p>{data.slice_data.slice_1.departure.datetime.time_12h}</p>
            </section>
            <section className="flex flex-col items-center justify-center">
              <div className="border-b pt-4 mx-2 lg:mx-0 border-navy-blue font-roboto lg:text-2xl text-xs font-bold text-center">
                {data.slice_data.slice_1.airline.name}
              </div>
              <div>
              <p className="text-xs lg:text-lg font-mono text-center">
                  {data.price_details.baseline_symbol}
                  {data.price_details.baseline_total_fare_per_ticket}
                </p>

                <p className="text-center text-xs lg:text-lg">
                  {data.slice_data.slice_1.info.duration}
                </p>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full group bg-light-blue hover:bg-opacity-5 text-white font-bold px-2 rounded shadow-md transition duration-200 ease-in-out"
                  >
                     <div className="flex justify-center py-0.5 lg:py-1 ">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-xs lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-100"
                      />
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-xs lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-200"
                      />
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-xs lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-300"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </section>
            <section className="lg:text-2xl text-xs py-6 lg:py-4 lg:pl-10 font-mono text-center border-l lg:border-l-2 border-light-blue">
              <p>Destination</p>
              <p>{data.slice_data.slice_1.arrival.airport.name}</p>
              <p className="text-xs">
                {data.slice_data.slice_1.arrival.datetime.date_display}
              </p>
              <p>{data.slice_data.slice_1.arrival.datetime.time_12h}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReturningFlightSearch;
