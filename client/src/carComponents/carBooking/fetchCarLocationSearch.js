import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCarLocation = createAsyncThunk(
  'fetchCarRentalLocation',
  async (location, { rejectWithValue }) => {
    const url = `https://priceline-com-provider.p.rapidapi.com/v2/cars/autoComplete`;
    const config = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params: {
        string: location,
        max_results: '10',
        get_cities: 'true',
        get_airports_in_cities: 'true',
        get_airports: 'true'
      },
    };

    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      console.error(err);
      const errorPayload = {
        message: err.message,
        statusCode: err.response?.status,
      };
      return rejectWithValue(errorPayload);
    }
  }
);


export const carLocationsSlice = createSlice({
    name: 'carRentalLocations',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchCarLocation.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchCarLocation.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
          })
          .addCase(fetchCarLocation.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });
    
    export default carLocationsSlice.reducer;
