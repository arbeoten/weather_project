import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCityWeather, getDetailCityWeather, getAirPollution, getWeather, getLatlonWeather } from '../api/openWeatherApi'

export const fetchAllWeathers = createAsyncThunk('weathers/allWeathers', async () => {
   const response = await getAllCityWeather()
   return response.data.list
})

export const fetchDetailWeather = createAsyncThunk('weathers/detailWeather', async (city) => {
   const response = await getDetailCityWeather(city)
   return response.data.list
})

export const fetchAirPollution = createAsyncThunk('weathers/airPollution', async ({ lat, lon }) => {
   const response = await getAirPollution(lat, lon)
   return response.data
})

export const fetchWeather = createAsyncThunk('weathers/weather', async (city) => {
   const response = await getWeather(city)
   return response.data
})

export const fetchLatlonWeather = createAsyncThunk('weathers/latlonWeather', async ({ lat, lon }) => {
   const response = await getLatlonWeather(lat, lon)
   return response.data
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      allWeathers: [],
      detailWeather: [],
      airPollution: null,
      weather: null,
      latlonWeather: null,
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

         .addCase(fetchDetailWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchDetailWeather.fulfilled, (state, action) => {
            state.loading = false
            state.detailWeather = action.payload
         })
         .addCase(fetchDetailWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchAirPollution.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchAirPollution.fulfilled, (state, action) => {
            state.loading = false
            state.airPollution = action.payload
         })
         .addCase(fetchAirPollution.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchLatlonWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchLatlonWeather.fulfilled, (state, action) => {
            state.loading = false
            state.latlonWeather = action.payload
         })
         .addCase(fetchLatlonWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
