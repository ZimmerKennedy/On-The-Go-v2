import React from "react";


const HotelDetailsSection1 = ({
    hotelPhotosArray,
    handleCardClick,
}) => {
  return (
    <section
      className=" w-full  lg:h-72 grid grid-cols-5 gap-1 z-10 cursor-pointer my-2"
      onClick={handleCardClick}
    >
      <div className="w-full h-44 lg:h-full col-span-5 grid grid-cols-5 gap-0.5 lg:gap-1 cursor-pointer">
        {hotelPhotosArray.slice(0, 5).map((photoUrl, index) => (
          <div
            key={index}
            className="w-[100%] h-[100%] bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${photoUrl})`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HotelDetailsSection1;
