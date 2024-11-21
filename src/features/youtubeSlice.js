import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getYoutube } from '../api/youtubeApi'

export const fetchYoutube = createAsyncThunk('youtube/video', async () => {
   const response = await getYoutube()
   return response.data
})

const youtubeSlice = createSlice({
   name: 'youtube',
   initialState: {
      video: null,
      yt_error: null,
      yt_loading: false,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchYoutube.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchYoutube.fulfilled, (state, action) => {
            state.loading = false
            state.video = action.payload
         })
         .addCase(fetchYoutube.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default youtubeSlice.reducer
