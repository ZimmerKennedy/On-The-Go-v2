import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserHotels = createAsyncThunk(
  'fetchUserHotels',
  async (hotelQuery, { rejectWithValue }) => {
    const url = 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/expressResults'
    const config = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params: {
        ...hotelQuery,
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


export const userHotelsSlice = createSlice({
    name: 'userHotels',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchUserHotels.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchUserHotels.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
          })
          .addCase(fetchUserHotels.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });
    
    export default userHotelsSlice.reducer;
