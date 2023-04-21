import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFlights = createAsyncThunk(
  'fetchFlights',
  async (flightQuery, { rejectWithValue }) => {
    const url = 'https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip'
    const config = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params: {
        ...flightQuery,
      },
    };

    try {
      const { data } = await axios.get(url, config);
      console.log(`data from fetch`, data)
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


export const userFlightsSlice = createSlice({
    name: 'userFlights',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchFlights.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchFlights.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
          })
          .addCase(fetchFlights.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });
    
    export default userFlightsSlice.reducer;
