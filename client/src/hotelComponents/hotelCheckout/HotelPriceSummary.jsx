import React from "react";
import { useSelector } from "react-redux";

const HotelPriceSummary = () => {
  const userHotel = useSelector((state) => state.userHotel);
  const hotelData = useSelector((state) => state.hotelData);
  const hotelSearchData = useSelector((state) => state.hotelSearchData);


  function calculateDays(checkIn, checkOut) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const days = Math.round(
      (checkOutDate - checkInDate) / oneDayInMilliseconds
    );
    return days;
  }

  return (
    <section className="text-navy-blue">
      <div className="p-6 flex flex-col gap-y-2">
        <div className=" font-roboto text-xl font-bold border-b-navy-blue border-b-2">
          Price Summary
        </div>
        <div className=" font-roboto font-bold text-lg">
          {hotelData.hotelName}
        </div>

        <div className=" font-thin text-md ">
          {userHotel.price_details.baseline_price} Per Night
        </div>
        <div className=" font-thin text-md ">
          {" "}
          {calculateDays(
            hotelSearchData.meta.arg.check_in,
            hotelSearchData.meta.arg.check_out
          )}{" "}
          Days
        </div>
        <div className=" font-thin text-md border-b-navy-blue border-b-2">
          Taxes & Fees: {userHotel.price_details.display_symbol}
          {userHotel.price_details.display_taxes}
        </div>
        <div className=" font-roboto font-bold text-lg">
          Total
          <span className="pl-12">
            {userHotel.price_details.display_symbol}
            {userHotel.price_details.display_total}
          </span>
        </div>
        <div className=" font-thin">
          Rates are quoted in{" "}
          {userHotel.price_details.display_currency}
        </div>
      </div>
    </section>
  );
};

export default HotelPriceSummary;
