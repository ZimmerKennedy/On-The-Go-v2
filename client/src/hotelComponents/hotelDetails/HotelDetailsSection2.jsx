import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const HotelDetailsSection2 = ({ hotelData }) => {


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-500"
          />
        );
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} />);
      }
    }
    return stars;
  };

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <section className="w-full flex flex-col items-center my-2 py-4">
      <div className="font-roboto text-4xl text-center lg:text-6xl font-bold tracking-wider">
        {hotelData.data.hotelName.toUpperCase()}
      </div>
      <div className="flex py-1">{renderStars(hotelData.data.starRating)}</div>
      <div className="flex flex-col lg:flex-row text-center gap-1 tracking-wider mt-4 font-mono">
        <div>{capitalize(hotelData.data.hotelAddress.address_line_one)},</div>
        <div>{capitalize(hotelData.data.hotelAddress.city_name)},</div>
        <div>{capitalize(hotelData.data.hotelAddress.country_name)}</div>
      </div>
            
    </section>
  );
};

export default HotelDetailsSection2;
