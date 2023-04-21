import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Navbar";
import HotelUserInput from "../hotelUserSearchResults/HotelUserInput";
import HotelImages from "./HotelImages"; 
import HotelDetailsSection1 from "./HotelDetailsSection1";
import HotelDetailsSection2 from "./HotelDetailsSection2";
import HotelDetailsSection3 from "./HotelDetailsSection3";

const HotelDetails = () => {
  const hotelData = useSelector((state) => state.hotelData);
  const hotelPhotosObject =
    hotelData.photos.getHotelPhotos.results.hotel_photo_data.hotel_photos_0
      .photo_data;
  const hotelPhotosArray = Object.keys(hotelPhotosObject).map(
    (key) => hotelPhotosObject[key]
  );

  const [showImages, setShowImages] = useState(false);

  const handleCardClick = () => {
    setShowImages(true);
  };

  const handleCloseImages = () => {
    setShowImages(false);
  };

  
  return (
    <div className="min-w-full min-h-screen ">
      <Navbar />
      <main className="w-full h-full flex flex-col items-center justify-center">
        <HotelUserInput />

        <HotelDetailsSection1
          handleCardClick={handleCardClick}
          hotelData={hotelData}
          hotelPhotosArray={hotelPhotosArray}
        />

        <HotelDetailsSection2
          hotelData={hotelData}
          hotelPhotosArray={hotelPhotosArray}
        />
        <div className="w-1/2">
        <HotelDetailsSection3 
          hotelData={hotelData}
          hotelPhotosArray={hotelPhotosArray}
          />
          </div>
      </main>

      <div className="absolute w-1/2 h-1/2 top-0 left-96">
        {showImages && (
          <HotelImages
            hotelPhotosArray={hotelPhotosArray}
            onClose={handleCloseImages}
          />
        )}
      </div>
    </div>
  );
};

export default HotelDetails;
