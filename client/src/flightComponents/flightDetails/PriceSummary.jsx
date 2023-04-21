import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PriceSummary = ({ showButton }) => {
  const navigate = useNavigate();
  const flightData = useSelector((state) => state.userFlights);

  const { departingFlight, returningFlight } = useSelector(
    (state) => state.roundtripFlightData
  );

  const calculateTaxes = () => {
    if (!departingFlight || !returningFlight) {
      return 0;
    }

    const departingTax = parseInt(
      departingFlight.price_details.baseline_taxes_and_ppn_fees
    );
    const returningTax = parseInt(
      returningFlight.price_details.baseline_taxes_and_ppn_fees
    );
    const totalTaxes = departingTax + returningTax;

    return totalTaxes;
  };

  const calculateTotalAmount = () => {
    if (!departingFlight || !returningFlight) {
      return 0;
    }

    const departingAmount = parseInt(
      departingFlight.price_details.baseline_total_fare_per_ticket
    );

    const returningAmount = parseInt(
      returningFlight.price_details.baseline_total_fare_per_ticket
    );
    const totalAmount = departingAmount + returningAmount;
    return totalAmount;
  };

  const calculateTotalAmountWithTaxes = () => {
    const taxes = calculateTaxes();
    const totalAmount = calculateTotalAmount();

    return totalAmount + taxes;
  };

  return (
    <section>
      <div className="p-6 flex flex-col gap-y-2">
        <div className=" font-roboto text-xl font-bold border-b-navy-blue border-b-2">
          Price Summary
        </div>
        <div className=" font-roboto font-bold text-lg">Traveler: 1 Adult</div>
        <div className=" font-thin text-md ">{`Flight: ${
          returningFlight.price_details.baseline_symbol
        }${calculateTotalAmount()}`}</div>
        <div className=" font-thin text-md border-b-navy-blue border-b-2">
          Taxes & Fees: {returningFlight.price_details.baseline_symbol}
          {calculateTaxes()}
        </div>
        <div className=" font-roboto font-bold text-lg">{`Trip Total: ${
          returningFlight.price_details.baseline_symbol
        }${calculateTotalAmountWithTaxes()}`}</div>
        <div className=" font-thin">Rates are quoted in USD</div>
        {showButton && (
          <button
            onClick={() => {
              navigate("/Payments");
            }}
            className="my-2 mx-8 xl:mx-0 xl:my-4 bg-deep-blue hover:bg-navy-blue w-56 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out"
          >
            Check out
          </button>
        )}
      </div>
    </section>
  );
};

export default PriceSummary;
