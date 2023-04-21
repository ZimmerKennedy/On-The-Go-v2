import React, { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";



const Checkout = () => {





  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const {error, paymentIntent} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`
      },
      redirect: "if_required"
    });
    if(error){
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded'){
      setMessage("Payment Status: " + paymentIntent.status)
      navigate('/payment-success')
    } else {
      setMessage("Unexpected State")
    }
    setIsProcessing(false);
  };


  return (
    <form onSubmit={handleSubmit} className=" w-full h-full rounded-lg "
    style={{ backgroundColor: "rgba(249, 250, 251, 0.7)" }}>
      <PaymentElement className="p-6" />
      <button disabled={isProcessing} className="my-4 mx-16  xl:mx-52 bg-deep-blue hover:bg-navy-blue w-56 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out">
        <span>
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
    </form>
  );
};

export default Checkout;
