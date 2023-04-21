import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import PriceSummary from "../flightDetails/PriceSummary";
import Navbar from "../../Navbar";
import PersonalInfoUser from "./PersonalInfoUser";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    fetch("https://on-the-go.onrender.com/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("https://on-the-go.onrender.com/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {

      const { clientSecret } = await r.json();

      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/paymentBg.jpg')`}}
    >
      <Navbar />
      <div className="flex flex-col items-center"
      >
        <div className=" xl:absolute xl:right-96 my-4 shadow-lg rounded-md xl:h-[30%] xl:w-[12%]"
        style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}
        >
          <PriceSummary showButton={false} />
        </div>
        <div className="w-full xl:w-1/3 my-4"
        >
          <PersonalInfoUser
          />
        </div>
  
        <section className="p-4 xl:p-0 xl:w-1/3">
          {stripePromise && clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <Checkout />
            </Elements>
          ) : (
            <div>
              <button className=" bg-deep-blue hover:bg-navy-blue w-56 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out"
              onClick={() =>{navigate('/')}}>
                Submit
              </button>
              <p className="text-red-500 text-sm mt-2">
                Grabbing Payment Option Please Wait.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Payment;
