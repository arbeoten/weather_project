import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDetailWeather, fetchWeather, fetchAirPollution } from '../features/weatherSlice'
import AirPollution from './AirPollution'
import naming from '../func/naming'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function DetailWeather() {
   // 그리드 스타일
   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.applyStyles('dark', {
         backgroundColor: '#1A2027',
      }),
   }))

   const { city } = useParams()
   const dispatch = useDispatch()
   const { airPollution, weather, detailWeather, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchDetailWeather(city))
   }, [dispatch, city])

   useEffect(() => {
      const fetchData = async () => {
         await dispatch(fetchWeather(city))
      }
      fetchData()
   }, [dispatch, city])

   useEffect(() => {
      if (weather) {
         const lon = weather.coord.lon
         const lat = weather.coord.lat
         dispatch(fetchAirPollution({ lat, lon }))
      }
   }, [dispatch, weather])

   // 차트 데이터
   const tempChart = detailWeather.map((weather) => {
      return {
         name: weather.dt_txt,
         기온: weather.main.temp,
         강수확률: Number((weather.pop * 100).toFixed(2)),
      }
   })

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   console.log(airPollution)
   let date = new Date()

   return (
      <>
         {weather && airPollution && (
            <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={1}>
                  <Grid size={6}>
                     <Item sx={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: '1em' }}>
                        <p>{date.toLocaleString()}</p>
                        <h2>
                           {naming(city)},<img src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'} alt="icon" style={{ marginBottom: '-15px' }} />
                           {weather.main.temp}℃
                        </h2>
                     </Item>
                  </Grid>
                  <Grid size={6}>
                     <Item sx={{ height: '90%' }}>
                        <AirPollution
                           so2={airPollution.list[0].components.so2}
                           no2={airPollution.list[0].components.no2}
                           pm10={airPollution.list[0].components.pm10}
                           pm25={airPollution.list[0].components.pm2_5}
                           o3={airPollution.list[0].components.o3}
                           co={airPollution.list[0].components.co}
                           aqi={airPollution.list[0].main.aqi}
                        />
                     </Item>
                  </Grid>
                  <Grid size={12}>
                     <Item>
                        <ResponsiveContainer width="100%" height={400}>
                           <ComposedChart data={tempChart}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis type="number" domain={[0, 100]} />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="강수확률" barSize={20} fill="skyblue" />
                              <Line type="monotone" dataKey="기온" stroke="orange" />
                           </ComposedChart>
                        </ResponsiveContainer>
                     </Item>
                  </Grid>
               </Grid>
            </Box>
         )}
      </>
   )
}

export default DetailWeather
