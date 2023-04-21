import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CarSearchUserDetails,
  CarTypeFilter,
  PriceFilter,
  PassengerFilter,
  TransmissionFilter,
} from "../index";
import { setUserCarData } from "./CarSearchSlice";
import Navbar from "../../Navbar";
import Fallback from "../../Fallback";

const CarSearchResult = () => {
  const [isCarTypeOpen, setIsCarTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isPassengerOpen, setIsPassengerOpen] = useState(false);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carSearchData = useSelector((state) => state.carSearchData);
  if (carSearchData.payload.getCarResultsRequest.error) {
    return <Fallback />;
  }
  console.log(`carSearchData`,carSearchData)
  const results =
    carSearchData.payload.getCarResultsRequest.results.results_list;
  const extractedData = Object.keys(results).map((key) => {
    const result = results[key];

    return {
      car: result.car,
      dropoff: result.dropoff,
      partner: result.partner,
      pickup: result.pickup,
      priceDetails: result.price_details,
      rentalDays: result.num_rental_days,
      carType: result.car.description,
    };
  });


  const handleCarCardClick = (userCarDetails) => {
    dispatch(setUserCarData(userCarDetails));
    navigate("/user-car-preview");
  };

  const [filters, setFilters] = React.useState({
    carType: "",
    price: "",
    passengers: "",
    bags: "",
    transmission: "",
  });

  const handleFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = extractedData.filter((item) => {
    return (
      (!filters.carType ||
        (item.car.type_name.includes("Car") && filters.carType === "Car") ||
        (item.car.type_name.includes("SUV") && filters.carType === "SUV") ||
        (item.car.type_name.includes("Pickup") &&
          filters.carType === "Pickup")) &&
      (!filters.price ||
        (item.priceDetails.base.total_price_float >= filters.price.min &&
          item.priceDetails.base.total_price_float <= filters.price.max)) &&
      (!filters.passengers ||
        parseInt(item.car.passengers) === parseInt(filters.passengers)) &&
      (!filters.bags || parseInt(item.car.bags) === parseInt(filters.bags)) &&
      (!filters.transmission || item.car.transmission === filters.transmission)
    );
  });
  console.log(`filteredData`,filteredData)

  function getCarTypes(data) {
    const carTypes = data.map((item) => item.carType);
    return carTypes;
  }
  const carTypes = getCarTypes(extractedData);

  return (
    
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Navbar />
        <CarSearchUserDetails />
        <main className="w-full h-full flex flex-col lg:flex-row justify-between lg:justify-center">
          <section className="flex flex-row lg:flex-col lg:w-1/6 lg:mx-6 ">
            <div className="relative mx-2">
              <button
                className="flex items-center justify-between w-full lg:p-3 px lg:text-lg text-md  text-navy-blue  border-b border-light-blue  "
                onClick={() => setIsCarTypeOpen(!isCarTypeOpen)}
              >
                <span>Vehicle</span>
                <span
                  className={`transform transition-transform ${
                    isCarTypeOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isCarTypeOpen && (
                <section className="flex flex-col lg:p-3 bg-gray-200 z-10 mt-2 lg:mt-0 mb-0.5 absolute lg:relative">
                  <CarTypeFilter onFilter={handleFilter} />
                </section>
              )}
            </div>
            <div className="relative mx-2">
              <button
                className="flex items-center justify-between w-full lg:p-3 lg:text-lg text-md   text-navy-blue  border-b border-light-blue  "
                onClick={() => setIsPassengerOpen(!isPassengerOpen)}
              >
                <span>Passenger</span>
                <span
                  className={`transform transition-transform ${
                    isPassengerOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isPassengerOpen && (
                <section className="flex flex-col p-3 mt-2 lg:mt-0 bg-gray-200 z-10 mb-0.5 absolute lg:relative">
                  <PassengerFilter onFilter={handleFilter} />
                </section>
              )}
            </div>
            <div className="relative mx-2">
              <button
                className="flex items-center justify-between w-full lg:p-3 lg:text-lg text-md  text-navy-blue  border-b border-light-blue  "
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <span>Price</span>
                <span
                  className={`transform transition-transform ${
                    isPriceOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isPriceOpen && (
                <section className="flex flex-col mt-2  bg-gray-200 z-10 mb-0.5 absolute lg:relative">
                  <PriceFilter onFilter={handleFilter} />
                </section>
              )}
            </div>
            <div className="relative mx-2">
              <button
                className="flex items-center justify-between w-full lg:p-3 lg:text-lg text-md  text-navy-blue  border-b border-light-blue  "
                onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
              >
                <span>Transmission</span>
                <span
                  className={`transform transition-transform ${
                    isTransmissionOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isTransmissionOpen && (
                <section className="flex flex-col p-3 mt-2 lg:mt-0 ml-4 lg:ml-0 bg-gray-200 z-10 mb-0.5 absolute lg:relative">
                  <TransmissionFilter onFilter={handleFilter} />
                </section>
              )}
            </div>
          </section>

          <section className="flex flex-row flex-wrap  flex-1">
            {filteredData.map((data, index) => (
              <div
                key={index}
                onClick={() => {
                  handleCarCardClick({
                    description: data.car.description,
                    passengers: data.car.passengers,
                    bags: data.car.bags,
                    transmission: data.car.transmission,
                    imageURL: data.car.images?.SIZE335X180 ?? data.car.imageURL,
                    locationDropoff: data.dropoff.location,
                    locationCodeDropoff: data.dropoff.location_code,
                    locationPickup: data.pickup.location,
                    locationCodePickup: data.pickup.location_code,
                    companyName: data.partner.name,
                    companyLogo: data.partner.logo,
                    basePriceDescription: data.priceDetails.base.rate_unit,
                    basePricePerDescription: data.priceDetails.base.price,
                    basePriceTotal: data.priceDetails.base.total_price_float,
                    currency: data.priceDetails.base.currency,
                    rentDays: data.rentalDays,
                    highlights: [
                      ...data.partner.highlights.enhancedCleaning.items,
                    ],
                  });
                }}
                className="border-2 bg-white shadow-lg w-full lg:w-[30%] h-1/8 cursor-pointer flex flex-col justify-center items-center m-2"
              >
                <div className="font-roboto text-xl font-bold m-2 border-b border-navy-blue">
                  {data.car.description}
                </div>
                <div className="flex flex-row justify-evenly w-full items-center">
                  <div className="p-1 font-mono">
                    <p>Passengers {data.car.passengers}</p>
                    <p>Bags {data.car.bags}</p>
                    <p>{data.car.transmission}</p>
                  </div>
                  <div>
                    <p className="font-mono">
                      ${data.priceDetails.base.total_price_float}
                    </p>
                  </div>
                </div>
                <img
                  src={data.car.images?.SIZE335X180 ?? data.car.imageURL}
                  alt="CarImg"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </section>
        </main>
      </main>
    
  );
};

export default CarSearchResult;