import { createSlice } from '@reduxjs/toolkit';

export const hotelSearchDataSlice = createSlice({
  name: 'hotelSearchData',
  initialState: null,
  reducers: {
    setHotelSearchData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setHotelSearchData } = hotelSearchDataSlice.actions;

export default hotelSearchDataSlice.reducer;
