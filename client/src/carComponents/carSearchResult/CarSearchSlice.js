import { createSlice } from '@reduxjs/toolkit';

export const userCarData = createSlice({
  name: 'userCarData',
  initialState: null,
  reducers: {
    setUserCarData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserCarData } = userCarData.actions;

export default userCarData.reducer;

