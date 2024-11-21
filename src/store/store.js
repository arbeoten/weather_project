import { configureStore } from '@reduxjs/toolkit'
import weathersReducer from '../features/weatherSlice'
import youtubeReducer from '../features/youtubeSlice'

const store = configureStore({
   reducer: {
      weathers: weathersReducer,
      youtube: youtubeReducer,
   },
})

export default store
