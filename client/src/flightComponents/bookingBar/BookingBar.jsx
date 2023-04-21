import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import BookingSection1 from "./BookingSection1";
import BookingSection2 from "./BookingSection2";
import { fetchFlights } from "./fetchFlights";
import Button from "./Button";
import Alert from "./Alert";

const BookingBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departingDate, setDepartingDate] = useState(null);
  const [returningDate, setReturningDate] = useState(null);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [tripType, setTripType] = useState("Roundtrip");




  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  };

  const handleSearchClick = () => {
    if (isFormFilled()) {
      fetchFlightBookings();
      simulateLoading();
    } else {
      setIsAlertShown(true);
    }
  };

  const isFormFilled = () => {
    if (origin && destination && departingDate && travelers && classType) {
      if (tripType === "Roundtrip" && returningDate) {
        return true;
      } else if (tripType === "One Way") {
        return true;
      }
    }
    return false;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}/${month < 10 ? "0" + month : month}/${
      day < 10 ? "0" + day : day
    }`;
  };

  const extractParenthesis = (str) => {
    let result = "";
    const matches = str.match(/\(([^)]+)\)/g);
    if (matches) {
      result = matches.join("").replace(/[\(\)]/g, "");
    }
    return result;
  };

  const fetchFlightBookings = async () => {
    const departingDateObject = new Date(departingDate);
    departingDateObject.setMonth(departingDateObject.getMonth() + 3);
    const defaultDateOneWay = formatDate(departingDateObject);
    console.log(`defaultDateOneWay`,defaultDateOneWay)


    const flightQuery = {
      departure_date: `${formatDate(departingDate)},${
        tripType === "One Way"
          ? defaultDateOneWay
          : formatDate(returningDate)
      }`,
      adults: travelers,
      sid: "iSiX639",

      origin_airport_code: `${extractParenthesis(origin)},${extractParenthesis(
        destination
      )}`,
      cabin_class: classType.toLowerCase(),

      destination_airport_code: `${extractParenthesis(
        destination
      )},${extractParenthesis(origin)}`,
      number_of_itineraries: "50",
    };



    try {
      const flightData = await dispatch(fetchFlights(flightQuery));

      if (tripType === "One Way") navigate('/flight-search-one-way');
      else if (tripType === "Roundtrip") navigate('/flight-search');
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center sm:h-full w-full">
      <div
        className={`relative flex flex-col w-full h-auto xl:w-1/2 rounded-lg border border-gray bg-black bg-opacity-60 shadow-black shadow-sm m-2
  ${isLoading ? "border-t-4 border-blue-600 animate-pulse" : ""}`}
      >
        <div className="relative bg-white bg-opacity-0">
          <Alert
            isAlertShown={isAlertShown}
            setIsAlertShown={setIsAlertShown}
          />
          <BookingSection1
            tripType={tripType}
            classType={classType}
            travelers={travelers}
            setTravelers={setTravelers}
            setClassType={setClassType}
            setTripType={setTripType}
          />

          <BookingSection2
            destination={destination}
            origin={origin}
            departingDate={departingDate}
            returningDate={returningDate}
            tripType={tripType}
            setOrigin={setOrigin}
            setDestination={setDestination}
            setDepartingDate={setDepartingDate}
            setReturningDate={setReturningDate}
          />

          <Button
            handleSearchClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
};
export default BookingBar;
