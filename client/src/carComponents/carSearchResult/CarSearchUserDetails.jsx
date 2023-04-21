import React from "react";
import { useSelector } from "react-redux";
const CarSearchUserDetails = () => {
  const carSearchData = useSelector((state) => state.carSearchData);

  return (
    <main
      className="flex flex-row my-8 lg:w-1/2 h-32 bg-slate-50 justify-center items-center lg:gap-14 border-light-blue rounded-md shadow-lg font-mono"
      style={{ boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" }}
    >
      <section className="text-xs flex flex-col w-full h-full justify-center pl-2 lg:pl-0 lg:items-center border-r lg:border-r-2 border-light-blue">
        <div>
          Pickup (
          {
            carSearchData.payload.getCarResultsRequest.results.search_data
              .pickup.code
          }
          )
        </div>
        <div className="">
          {carSearchData.payload.getCarResultsRequest.results.search_data.pickup
            .airport_name
            ? carSearchData.payload.getCarResultsRequest.results.search_data
                .pickup.airport_name
            : ""}
        </div>
        <div>
          {
            carSearchData.payload.getCarResultsRequest.results.search_data
              .pickup.date
          }
        </div>
      </section>
      <section className="text-lg flex flex-col w-full h-full items-center justify-center">
        <div>
          {
            carSearchData.payload.getCarResultsRequest.results.results_list
              .result_0.num_rental_days
          }{" "}
          Days
        </div>
      </section>
      <section className="text-xs flex flex-col w-full h-full lg:items-center justify-center pl-2 lg:pl-0 border-l lg:border-l-2 border-light-blue">
        <div>
          Dropoff (
          {
            carSearchData.payload.getCarResultsRequest.results.search_data
              .dropoff.code
          }
          )
        </div>
        <div>
          {carSearchData.payload.getCarResultsRequest.results.search_data
            .dropoff.airport_name
            ? carSearchData.payload.getCarResultsRequest.results.search_data
                .dropoff.airport_name
            : ""}
        </div>
        <div>
          {
            carSearchData.payload.getCarResultsRequest.results.search_data
              .dropoff.date
          }
        </div>
      </section>
    </main>
  );
};

export default CarSearchUserDetails;
