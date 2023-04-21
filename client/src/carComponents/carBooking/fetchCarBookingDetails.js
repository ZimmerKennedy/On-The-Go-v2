import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCarBookingDetails = createAsyncThunk(
  "CarBookingDetails",
  async (carQuery, { rejectWithValue }) => {
    const url =
      "https://priceline-com-provider.p.rapidapi.com/v2/cars/resultsRequest";
    const config = {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
      },
      params: carQuery,
    };

    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  }
);

export const carLocationsSlice = createSlice({
  name: "carRentalLocations",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCarLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carLocationsSlice.reducer;
