import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchHotelLocation = createAsyncThunk(
  'fetchSearchHotelLocation',
  async (location, { rejectWithValue }) => {
    const url = 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest'
    const config = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params: {
        string: location,
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


export const hotelSearchLocationSlice = createSlice({
    name: 'hotelSearchLocations',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchSearchHotelLocation.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchSearchHotelLocation.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
          })
          .addCase(fetchSearchHotelLocation.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });
    
    export default hotelSearchLocationSlice.reducer;
