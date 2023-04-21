import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserHotel } from "./setFinalHotelDetails";

const HotelDetailsSection3 = ({ hotelData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const roomData = hotelData.data.roomData;
    


    const handleCardClick = (userHotelData) => {
        dispatch(setUserHotel(userHotelData));
        navigate('/hotel-checkout')
      };
    
  return (
    <section className="flex flex-col">
      {Object.keys(roomData).map((roomKey) => {
        const room = roomData[roomKey];
        return (
          <div
            key={room.id}
            className=" border-t pt-4 border-light-blue w-full flex-wrap flex flex-col items-center"
          >
            <h3 className="font-roboto text-xl lg:text-4xl text-center">{room.title}</h3>
            <p className="text-md lg:text-lg tracking-tighter text-center">
              {room.description}
            </p>
            <p>{room.rate_data.rate_0.available_rooms} Rooms Available</p>
            <p>Occupancy Limit {room.rate_data.rate_0.occupancy_limit}</p>
            <p>
              {room.rate_data.rate_0.price_details.baseline_symbol}
              {room.rate_data.rate_0.price_details.night_price_data.night_price_0.baseline_night_price.toFixed(
                0
              )}{" "}
              Per Night
            </p>
            <button
              type="submit"
              onClick={() => handleCardClick(room.rate_data.rate_0)}
              className="group mb-4 bg-deep-blue hover:bg-opacity-5 text-white font-bold px-2 rounded shadow-md transition duration-200 ease-in-out  my-4 md:my-2"
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="py-1 text-lg text-white group-hover:text-blue-500 transition-colors duration-200 ease-in-out delay-100"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="py-1 text-lg text-white group-hover:text-blue-500 transition-colors duration-200 ease-in-out delay-200"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="py-1 text-lg text-white group-hover:text-blue-500 transition-colors duration-200 ease-in-out delay-300"
                />
              </div>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default HotelDetailsSection3;
