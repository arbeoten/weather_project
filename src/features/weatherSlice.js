import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCityWeather } from '../api/openWeatherApi'

export const fetchAllWeathers = createAsyncThunk('weathers/allWeathers', async () => {
   const response = await getAllCityWeather()
   return response.data.list
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      allWeathers: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchAllWeathers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchAllWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.allWeathers = action.payload
         })
         .addCase(fetchAllWeathers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
