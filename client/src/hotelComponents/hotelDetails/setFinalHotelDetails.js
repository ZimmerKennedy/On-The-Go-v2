import { createSlice } from '@reduxjs/toolkit';

export const userHotelSlice = createSlice({
  name: 'userHotel',
  initialState: null,
  reducers: {
    setUserHotel: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserHotel } = userHotelSlice.actions;

export default userHotelSlice.reducer;
