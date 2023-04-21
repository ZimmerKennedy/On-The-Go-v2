import React from "react";
import { useSelector } from "react-redux";
const HotelUserInput = () => {
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
    <main
      className="flex flex-row my-8 lg:w-1/2 h-32 bg-slate-50 justify-center items-center lg:gap-14 border-light-blue rounded-md shadow-lg font-mono"
      style={{ boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" }}
    >
      <section className="text-xs lg:text-lg flex flex-col w-full h-full justify-center pl-2 lg:pl-0 lg:items-center border-r lg:border-r-2 border-light-blue">
        <div>Check-in</div>
        <div>({hotelSearchData.meta.arg.check_in})</div>
      </section>
      <section className="text-xs lg:text-lg flex flex-col w-full h-full items-center justify-center">
        <div>Adults {hotelSearchData.meta.arg.adults}</div>
        {hotelSearchData.meta.arg.children > 0 && (
          <div>Children {hotelSearchData.meta.arg.children}</div>
        )}
        <div>
          {calculateDays(
            hotelSearchData.meta.arg.check_in,
            hotelSearchData.meta.arg.check_out
          )}{" "}
          Days
        </div>
      </section>
      <section className="text-xs lg:text-lg flex flex-col w-full h-full lg:items-center justify-center pl-2 lg:pl-0 border-l lg:border-l-2 border-light-blue">
        <div>Check-Out </div>
        <div>({hotelSearchData.meta.arg.check_out})</div>
      </section>
    </main>
  );
};

export default HotelUserInput;
