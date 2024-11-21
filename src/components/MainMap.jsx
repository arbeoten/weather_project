import './css/MainMap.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllWeathers } from '../features/weatherSlice'
import { fetchYoutube } from '../features/youtubeSlice'
import naming from '../func/naming'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function MainMap() {
   const dispatch = useDispatch()
   const { allWeathers, error, loading } = useSelector((state) => state.weathers)
   const { video, yt_error, yt_loading } = useSelector((state) => state.youtube)
   useEffect(() => {
      dispatch(fetchAllWeathers())
      dispatch(fetchYoutube())
   }, [dispatch])

   function createData(name, icon, description, temp, wind) {
      return { name, icon, description, temp, wind }
   }

   const rows = allWeathers.map((weather) => createData(weather.name, weather.weather[0].icon, weather.weather[0].description, weather.main.temp, weather.wind.speed))

   if (loading || yt_loading) return <p>Loading...</p>
   if (error || yt_error) return <p>Error: {error}</p>

   return (
      <>
         {allWeathers && video && (
            <div className="MainMap">
               <div className="MainMap-main" style={{ backgroundImage: 'url(/images/city_map.png)' }}>
                  {allWeathers.map((weather) => (
                     <div key={weather.id} className={weather.name}>
                        <Link to={'/detail/' + weather.name}>
                           <img src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'} alt="city" />
                           <p>{weather.main.temp.toFixed(1)}℃</p>
                           <p>{naming(weather.name)}</p>
                        </Link>
                     </div>
                  ))}
               </div>
               <div className="MainMap-sub">
                  <TableContainer component={Paper}>
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                           <TableRow>
                              <TableCell>도시</TableCell>
                              <TableCell align="center">날씨</TableCell>
                              <TableCell align="center">온도</TableCell>
                              <TableCell align="center">풍속</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {rows.map((row) => (
                              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                 <TableCell component="th" scope="row">
                                    {naming(row.name)}
                                 </TableCell>
                                 <TableCell className="tableRow" align="center" sx={{ p: 0 }}>
                                    <img src={'https://openweathermap.org/img/wn/' + row.icon + '.png'} alt="icon" height="30px" />
                                    &nbsp;{row.description}
                                 </TableCell>
                                 <TableCell align="center">{row.temp}℃</TableCell>
                                 <TableCell align="center">{row.wind}m/s</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
                  <Youtube videoId={video.items[0].snippet.resourceId.videoId} opts={{ height: '300px', width: '588px' }} style={{ margin: '20px 10px' }} />
               </div>
            </div>
         )}
      </>
   )
}

export default MainMap
