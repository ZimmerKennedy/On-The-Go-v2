import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import carRentalLocations from '../carComponents/carBooking/fetchCarLocationSearch'
import carSearchDataReducer from '../carComponents/carBooking/setCarDataSearch';
import userCarDataReducer  from '../carComponents/carSearchResult/CarSearchSlice';

import hotelSearchLocation from '../hotelComponents/hotelBooking/hotelBookingSlices/fetchSearchHotelLocation';
import hotelSearchDataReducer from '../hotelComponents/hotelBooking/hotelBookingSlices/setHotelSearchData'
import hotelDataReducer from '../hotelComponents/hotelUserSearchResults/setHotelData'
import userHotelReducer from '../hotelComponents/hotelDetails/setFinalHotelDetails'

import userFlightReducer from '../flightComponents/bookingBar/fetchFlights'
import airportLocations from '../flightComponents/bookingBar/airportLocationsSlice'
import roundtripFlightReducer from '../flightComponents/flightSearch/setRoundtripFlightUser'


const store = configureStore({
    reducer: {
        airportLocationsData: airportLocations,
        userFlights: userFlightReducer,
        roundtripFlightData: roundtripFlightReducer,

        carRentalLocations: carRentalLocations,
        carSearchData: carSearchDataReducer,
        userCarData: userCarDataReducer,

        hotelLocations: hotelSearchLocation,
        hotelSearchData: hotelSearchDataReducer,
        hotelData: hotelDataReducer,
        userHotel: userHotelReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;