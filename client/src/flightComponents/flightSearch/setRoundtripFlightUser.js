import { createSlice } from '@reduxjs/toolkit';

export const roundtripFlightUser = createSlice({
  name: 'roundtripFlight',
  initialState: {
    departingFlight: null,
    returningFlight: null,
  },
  reducers: {
    setDepartingFlightData: (state, action) => {
      state.departingFlight = action.payload;
    },
    setReturningFlightData: (state, action) => {
      state.returningFlight = action.payload;
    },
  },
});

export const { setDepartingFlightData, setReturningFlightData } = roundtripFlightUser.actions;

export default roundtripFlightUser.reducer;