import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  DatePicker,
  FormInput,
  SearchButton,
  Travelers,
} from "../index";
import { fetchSearchHotelLocation } from "./hotelBookingSlices/fetchSearchHotelLocation";
import { fetchUserHotels } from "./hotelBookingSlices/fetchUserHotels";
import { setHotelSearchData } from "./hotelBookingSlices/setHotelSearchData";

const HotelBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isAlertShown, setIsAlertShown] = useState(false);

  const hotelLocations = useSelector((state) => state.hotelLocations);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const isFormFilled = () => {
    if (destination && checkInDate && checkOutDate) {
      return true;
    } else {
      return false;
    }
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      fetchUserHotelsSearch();
      simulateLoading();
    } else {
      setIsAlertShown(true);
    }
  };

  const fetchHotelLocation = (e) => {
    const keyword = e.target.value;
    setDestination(keyword);
    dispatch(fetchSearchHotelLocation(destination));
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };

  const fetchUserHotelsSearch = async () => {
    const hotelQuery = {
      check_in: formatDate(checkInDate),
      check_out: formatDate(checkOutDate),
      limit_to_country: "true",
      multiple_deals: "true",
      rooms: rooms,
      limit: "30",
      language: "en-US",
      sid: "iSiX639",
      ...(children > 0 ? { children: children } : {}),
      adults: adults,
      output_version: "4",
      rate_identifier: "true",
      city_id:
        hotelLocations.data.getHotelAutoSuggestV2.results.result.cities.city_0
          .cityid_ppn,
      sort_by: "mp",
    };
    try {
      const userHotelSearchData = await dispatch(fetchUserHotels(hotelQuery));
      dispatch(setHotelSearchData(userHotelSearchData));

      navigate("/hotel-search");
    } catch (err) {
      console.error(err);
      console.error(err.response);
      const errorPayload = {
        message: err.message,
        statusCode: err.response?.status,
      };
      return rejectWithValue(errorPayload);
    }
  };

  return (
    <form
      onSubmit={handleSearchClick}
      className={`z-40 mx-4 relative xl:w-1/2 rounded-lg border border-gray  bg-black bg-opacity-60 shadow-black shadow-lg overflow-visible
      ${isLoading ? "border-t-4 border-blue-600 animate-pulse" : ""}`}
    >
      <div className="relative bg-white bg-opacity-0">
        <Alert isAlertShown={isAlertShown} setIsAlertShown={setIsAlertShown} />
      </div>

      <section className="flex flex-col lg:flex-row justify-center gap-4 mx-6 lg:mx-4 mb-4">
        <FormInput
          destination={destination}
          fetchHotelLocation={fetchHotelLocation}
          setDestination={setDestination}
          hotelLocations={hotelLocations}
        />
        <DatePicker
          label="Check-in Date"
          minDate={new Date()}
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
        />
        <DatePicker
          label="Check-out Date"
          minDate={checkInDate}
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
        />
        <Travelers
          showGuestsDropdown={showGuestsDropdown}
          setShowGuestsDropdown={setShowGuestsDropdown}
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          rooms={rooms}
          setRooms={setRooms}
        />
      </section>
      <section className="flex justify-start lg:justify-evenly mx-32 lg:mx-0">
        <SearchButton />
      </section>
    </form>
  );
};

export default HotelBooking;
