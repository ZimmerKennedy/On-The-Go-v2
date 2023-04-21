import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HotelUserInput from "./HotelUserInput";
import Navbar from "../../Navbar";
import HotelFilter from "./HotelFilter";
import { fetchHotelPhotos, setHotelData } from "./setHotelData";
import { useNavigate } from "react-router-dom";
import Fallback from "../../Fallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
const HotelUserSearchResults = () => {
  const hotelSearchData = useSelector((state) => state.hotelSearchData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (hotelSearchData.payload["getHotelExpress.Results"].error) {
    return <Fallback />;
  }

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

  const results =
    hotelSearchData.payload["getHotelExpress.Results"].results.hotel_data;

  const extractedData = Object.keys(results).map((key) => {
    const result = results[key];
    return {
      hotelAddress: result.address,
      amenityData: result.amenity_data,
      checkInInformation: result.check_in_information,
      hotelCity: result.city,
      hotelDescription: result.hotel_description,
      hotelId: result.id,
      hotelName: result.name,
      hotelStarRating: result.star_rating,
      hotelThumbnail: result.thumbnail_hq,
      hotelRoomData: result.room_data,
      reviewRating: result.review_rating,
      starRating: result.star_rating,
      cleanlinessRating: result.review_score_data,
      roomData: result.room_data,
    };
  });

  const [filteredData, setFilteredData] = useState(extractedData);
  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  const handleCardClick = async (data) => {
    try {
      await dispatch(fetchHotelPhotos(data.hotelId));
      await dispatch(setHotelData(data));
      navigate("/hotel-details");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="z-50">
      <Navbar />
      <main className="w-full min-h-screen flex flex-col items-center bg-gray-300">
        <HotelUserInput />
        <main className="w-full h-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <section className="flex flex-row lg:flex-col lg:w-1/6 lg:mx-6">
            <HotelFilter hotels={extractedData} onFilter={handleFilter} />
          </section>
          <section className="flex flex-row flex-wrap w-3/4 h-full">
            {filteredData.map((data, index) => (
              <div
                key={index}
                onClick={() => {
                  handleCardClick(data, data.hotelId);
                }}
                className="bg-white w-full lg:w-[30%] h-[25%] cursor-pointer flex flex-col  m-2 box-border"
              >
                <div
                  className="w-[100%] h-[100%]"
                  style={{
                    backgroundImage: `url(${data.hotelThumbnail.three_hundred_square})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "200px",
                  }}
                  aria-label="HotelImg"
                ></div>
                <div className="font-roboto font-bold text-lg text-center pt-4 border-b border-light-blue">
                  {data.hotelName}
                </div>

                <div className="p-1 font-mono text-center">
                  <p>{data.hotelAddress.address_line_one}</p>
                  <p>{data.hotelCity.name}</p>
                  <p>{renderStars(data.starRating)}</p>
                  <p>Reviews Rating {data.reviewRating}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </main>
    </div>
  );
};

export default HotelUserSearchResults;
