import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHotelPhotos = createAsyncThunk(
  'fetchHotelPhotos',
  async (hotelId, { rejectWithValue }) => {
    const url ='https://priceline-com-provider.p.rapidapi.com/v2/hotels/photos';
    const config = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params: {
        hotel_ids: hotelId,
        image_size:'large'
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

export const hotelDataSlice = createSlice({
  name: 'hotelData',
  initialState: {
    data: null,
    photos: null,
  },
  reducers: {
    setHotelData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotelPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export const { setHotelData } = hotelDataSlice.actions;

export default hotelDataSlice.reducer;
