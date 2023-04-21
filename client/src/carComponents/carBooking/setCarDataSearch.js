import { createSlice } from '@reduxjs/toolkit';

export const carSearchDataSlice = createSlice({
  name: 'carSearchData',
  initialState: null,
  reducers: {
    setCarSearchData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCarSearchData } = carSearchDataSlice.actions;

export default carSearchDataSlice.reducer;
