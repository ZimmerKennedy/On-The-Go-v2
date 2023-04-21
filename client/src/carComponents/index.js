
export { default as CarTypeFilter } from './carSearchResult/CarTypeFilter'
export { default as PriceFilter } from './carSearchResult/PriceFilter'
export { default as PassengerFilter } from './carSearchResult/PassengerFilter'
export { default as TransmissionFilter } from './carSearchResult/TransmissionFilter'
export { default as CarUserInfo } from './carUserInfo/CarUserInfo'








import { lazy } from "react";

export const CarHome = lazy(() => import("./carHome/CarHome"));
export const CarBooking = lazy(() => import("./carBooking/CarBooking"));
export const LocationInput = lazy(() => import("./carBooking/LocationInput"));
export const CarSearchResult = lazy(() => import("./carSearchResult/CarSearchResult"));
export const CarSearchUserDetails = lazy(() => import("./carSearchResult/CarSearchUserDetails"));
export const CarPayment = lazy(() => import("./carPayment/CarPayment"));
export const CarPriceSummary = lazy(() => import("./carPayment/CarPriceSummary"));
