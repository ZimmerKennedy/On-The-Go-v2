import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const HotelImages = ({ onClose }) => {
  const hotelData = useSelector((state) => state.hotelData);
  const hotelPhotosObject =
    hotelData.photos.getHotelPhotos.results.hotel_photo_data.hotel_photos_0
      .photo_data;
  const hotelPhotosArray = Object.keys(hotelPhotosObject).map(
    (key) => hotelPhotosObject[key]
  );

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="cursor-pointer fixed inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10 overflow-x-hidden"
      onClick={onClose}
    >
      <div
        className="w-3/4 h-3/4 bg-white overflow-y-auto p-4 cursor-default relative"
        onClick={handleImageClick}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-4 right-4 cursor-pointer text-xl"
          onClick={onClose}
        />
        <h2 className="text-xl mb-4 text-center font-bold">{hotelData.data.hotelName}</h2>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
          {hotelPhotosArray.map((photoUrl, index) => (
            <div
              key={index}
              className="w-[100%] h-48 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${photoUrl})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelImages;