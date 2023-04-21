import { lazy } from "react";

export const Home = lazy(() => import("./flightHome/FlightHome"));
export const BookingBar = lazy(() => import("./bookingBar/BookingBar"));
export const FlightDetails = lazy(() => import("./flightDetails/FlightDetails"));
export const PriceSummary = lazy(() => import("./flightDetails/PriceSummary"));
export const DepartingFlightSearch = lazy(() => import("./flightSearch/DepartingFlightSearch"));
export const FlightSearch = lazy(() => import("./flightSearch/FlightSearch"));
export const ReturningFlightSearch = lazy(() => import("./flightSearch/ReturningFlightSearch"));
export const DepartingFlightOneWay = lazy(() => import("./flightSearchOneWay/DepartingFlightOneWay"));
export const FlightDetailsOneWay = lazy(() => import("./flightSearchOneWay/FlightDetailsOneWay"));
export const FlightSearchOneWay = lazy(() => import("./flightSearchOneWay/FlightSearchOneWay"));
export const Login = lazy(() => import("./login/Login"));
export const Checkout = lazy(() => import("./payments/Checkout"));
export const Completion = lazy(() => import("./payments/Completion"));
export const Payment = lazy(() => import("./payments/Payment"));
export const PersonalInfoUser = lazy(() => import("./payments/PersonalInfoUser"));
