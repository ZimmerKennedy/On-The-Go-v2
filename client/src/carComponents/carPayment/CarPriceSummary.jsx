import React from "react";
import { useSelector } from "react-redux";

const CarPriceSummary = () => {
    const carUserData = useSelector((state) =>state.userCarData)

  return (
    <section className="text-navy-blue">
      <div className="p-6 flex flex-col gap-y-2">
        <div className=" font-roboto text-xl font-bold border-b-navy-blue border-b-2">
          Price Summary
        </div>
        <div className=" font-roboto font-bold text-lg">{carUserData.description}</div>
        
        <div className=" font-thin text-md ">{carUserData.basePricePerDescription} Per {carUserData.basePriceDescription}</div>
        <div className=" font-thin text-md ">{carUserData.rentDays} Days</div>
        <div className=" font-thin text-md border-b-navy-blue border-b-2">
          Taxes & Fees: $0
        </div>
        <div className=" font-roboto font-bold text-lg"> Total<span className="pl-20">${carUserData.basePriceTotal}</span></div>
        <div className=" font-thin">Rates are quoted in US Dollars</div>
      </div>
    </section>
  );
};

export default CarPriceSummary;
