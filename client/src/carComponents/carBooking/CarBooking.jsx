import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { fetchCarLocation } from "./fetchCarLocationSearch";
import { fetchCarBookingDetails } from "./fetchCarBookingDetails";
import { useNavigate } from "react-router-dom";
import { setCarSearchData } from "./setCarDataSearch";

import {LocationInput} from "../index";
const CarBooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carLocations = useSelector((state) => state.carRentalLocations);
  const [pickupLocation, setPickupLocation] = useState({
    cityString: "",
    airportCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [pickupDate, setPickupDate] = useState();
  const [pickupTime, setPickupTime] = useState();
  const [returnDate, setReturnDate] = useState();
  const [returnTime, setReturnTime] = useState();
  const [returnLocation, setReturnLocation] = useState({
    cityString: "",
    airportCode: "",
  });

  const [renderReturnLocationInput, setRenderReturnLocationInput] =
    useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    pickup: false,
    return: false,
  });
  const [isAlertShown, setIsAlertShown] = useState(false);


  const simulateLoading = () => {
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const handleSearchClick = (event) => {
    event.preventDefault()
    if (isFormFilled()) {
      fetchCarRentalSearch();
      simulateLoading(); 
    } else {
      setIsAlertShown(true);
    }
  };

  const isFormFilled = () => {
    if (
      pickupLocation &&
      pickupDate &&
      pickupTime &&
      returnDate &&
      returnTime
    ) {
      return true;
    } else {
      return false;
    }
  };



  const fetchCarRentalLocation = (e, locationType) => {
    const keyword = e.target.value;
    if (locationType === "pickup") {
      setPickupLocation(keyword);
      dispatch(fetchCarLocation(pickupLocation));
    } else if (locationType === "return") {
      setReturnLocation(keyword);
      dispatch(fetchCarLocation(returnLocation));
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month < 10 ? "0" + month : month}/${
      day < 10 ? "0" + day : day
    }/${year}`;
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  const fetchCarRentalSearch = async () => {
    
    const carQuery = {
      pickup_date: formatDate(pickupDate),
      pickup_time: formatTime(pickupTime),
      pickup_airport_code: pickupLocation.airportCode || "",
      pickup_city_string: pickupLocation.cityString || "",
      dropoff_date: formatDate(returnDate),
      dropoff_time: formatTime(returnTime),
    };

    if (renderReturnLocationInput) {
      returnLocation.airportCode || "";
      returnLocation.cityString || "";
    }

    try {
      const carBookingData = await dispatch(fetchCarBookingDetails(carQuery));
      dispatch(setCarSearchData(carBookingData));
      navigate("/car-search");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocationSelection = (locationType, city, locationCode) => {
    if (locationType === "pickup") {
      setPickupLocation({ cityString: city, airportCode: locationCode });
      setSelectedLocation({ ...selectedLocation, pickup: true });
    } else if (locationType === "return") {
      setReturnLocation({ cityString: city, airportCode: locationCode });
      setSelectedLocation({ ...selectedLocation, return: true });
    }
  };



  return (
    <form
      onSubmit={handleSearchClick}
      className={`relative mx-4 xl:w-1/2  rounded-lg border border-gray   bg-black bg-opacity-60 shadow-black shadow-lg
      ${isLoading ? "border-t-4 border-blue-600 animate-pulse" : ""}`}
    > 
    <div className="relative bg-white bg-opacity-0">
    {isAlertShown && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <strong className="font-bold">Error:</strong>
        <span className="ml-1 block sm:inline">
          Please fill in all the required fields before searching.
        </span>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={() => setIsAlertShown(false)}
        >
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              fillRule="evenodd"
              d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.641 3.641a.5.5 0 1 1-.707.707L10 10.707l-3.641 3.641a.5.5 0 1 1-.707-.707L9.293 10 5.652 6.359a.5.5 0 0 1 .707-.707L10 9.293l3.641-3.641a.5.5 0 0 1 .707 0z"
            />
          </svg>
        </span>
      </div>
    )}
    </div>
      
      <section className="flex flex-col lg:flex-row justify-center gap-4 mx-6 lg:mx-4 mb-4">
        <LocationInput
          renderReturnLocationInput={renderReturnLocationInput}
          pickupLocation={pickupLocation}
          returnLocation={returnLocation}
          selectedLocation={selectedLocation}
          fetchCarRentalLocation={fetchCarRentalLocation}
          handleLocationSelection={handleLocationSelection}
          carLocations={carLocations}
        />
      
        <div className="flex flex-col ">
          <label className="font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto"
          >
            Pick-Up Date:
          </label>
          <DatePicker
            name="pickupDate"
            minDate={new Date()}
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
            Pick-Up Time:
          </label>
          <DatePicker
            selected={pickupTime}
            onChange={(time) => setPickupTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={new Date(new Date().setHours(9, 0))} 
            maxTime={new Date(new Date().setHours(17, 0))} 
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
            Return Date:
          </label>
          <DatePicker
            selected={returnDate}
            minDate={pickupDate}
            onChange={(date) => setReturnDate(date)}
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto">
            Return Time:
          </label>
          <DatePicker
            selected={returnTime}
            onChange={(time) => setReturnTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={new Date(new Date().setHours(9, 0))} 
            maxTime={new Date(new Date().setHours(17, 0))} 
            className="border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"
          />
        </div>
      </section>
      <section className="flex justify-start lg:justify-evenly">
        <div className="mx-7 xl:mr-0 my-2">
          <input
            type="checkbox"
            id="differentReturnLocation"
            checked={renderReturnLocationInput}
            className="rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none h-5 w-5 mr-2"
            onChange={(e) => setRenderReturnLocationInput(e.target.checked)}
          />
          <label
            htmlFor="differentReturnLocation"
            className="font-bold text-xs text-white text-shadow-lg font-roboto"
          >
            Returning in a different location?
          </label>
          <div>
            <input
              type="checkbox"
              className="rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none h-5 w-5 mr-2"
            />
            <label
              htmlFor="differentReturnLocation"
              className="font-bold text-xs text-white text-shadow-lg font-roboto"
            >
              Driver aged between 25-75
            </label>
          </div>
        </div>

        <button
              type="submit"
              className="group mb-4 ml-6 lg:ml-0 bg-light-blue hover:bg-opacity-5 text-white font-bold px-2 rounded shadow-md transition duration-200 ease-in-out  my-4"
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-100"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-200"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-300"
                />
              </div>
            </button>
      </section>
    </form>
  );
};

export default CarBooking;