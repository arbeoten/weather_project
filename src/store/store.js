import { configureStore } from '@reduxjs/toolkit'
import weathersReducer from '../features/weatherSlice'

const store = configureStore({
   reducer: {
      weathers: weathersReducer,
   },
})

export default store
