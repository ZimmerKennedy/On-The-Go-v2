import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAirportLocations = createAsyncThunk(
  'airportLocation',
  async (location) => {
    const url ='https://priceline-com-provider.p.rapidapi.com/v1/flights/locations';
    const config = {
      headers:{
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      },
      params:{
        name:location
      },
    };
    try{
      const { data } = await axios.get(url, config);
      return data
    } catch(err){
      console.error(err);
      return null
    }
  }
)


export const airportLocationsSlice = createSlice({
    name: 'airportLocations',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchAirportLocations.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchAirportLocations.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
          })
          .addCase(fetchAirportLocations.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });
    
    export default airportLocationsSlice.reducer;
