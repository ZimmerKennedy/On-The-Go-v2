import React, {lazy, Suspense, useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import {
  Checkout,
  FlightDetails,
  DepartingFlightSearch,
  Home,
  Payment,
  Completion,
  FlightSearch,
  FlightSearchOneWay,
  FlightDetailsOneWay,
  Login,
} from "../flightComponents";
import { CarBooking, CarHome, CarSearchResult, CarUserInfo, CarPayment } from "../carComponents";
import LandingPage from "../landingPageComponents/LandingPage"
import {HotelHome, HotelUserSearchResults, HotelDetails, HotelImages} from "../hotelComponents"
import HotelPayment from "../hotelComponents/hotelCheckout/HotelPayment";
import LoadingPage from "../LoadingPage";



const AppRoutes = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {!showContent && <LoadingPage />}
      {showContent && (
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* Routes for Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* This is Routes for Flight App */}
          <Route path="/flight-home" element={<Home />} />
          <Route path="/departing-flight" element={<DepartingFlightSearch />} />
          <Route path="/flight-details" element={<FlightDetails />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payments" element={<Payment />} />
          <Route path="/payment-success" element={<Completion />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-search-one-way" element={<FlightSearchOneWay />} />
          <Route path="/flight-details-one-way" element={<FlightDetailsOneWay />} />
          <Route path="/login" element={<Login />} />

          {/* Routes for Car App */}
          <Route path="/car-home" element={<CarHome />} />
          <Route path="/car-search" element={<CarSearchResult />} />
          <Route path="/user-car-preview" element={<CarUserInfo />} />
          <Route path="/car-payment" element={<CarPayment />} />

          {/* Routes for Hotel App */}
          <Route path="/hotel-home" element={<HotelHome />} />
          <Route path="/hotel-search" element={<HotelUserSearchResults />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
          <Route path="/hotel-checkout" element={<HotelPayment />} />
          <Route path="/load" element={<LoadingPage />} />
        </Routes>
      </Suspense>
      )}
    </>
  );
};

export default AppRoutes;
