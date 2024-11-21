import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatlonWeather } from '../features/weatherSlice'
const { kakao } = window
function KaKaoMap() {
   let latlng = new kakao.maps.LatLng(37.450216, 126.702884)
   const dispatch = useDispatch()
   const { loading, error, latlonWeather } = useSelector((state) => state.weathers)
   useEffect(() => {
      const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
      const options = {
         //지도를 생성할 때 필요한 기본 옵션
         center: new kakao.maps.LatLng(37.450216, 126.702884), //지도의 중심좌표.
         level: 10, //지도의 레벨(확대, 축소 정도)
      }

      const lat = latlng.getLat()
      const lon = latlng.getLng()
      dispatch(fetchLatlonWeather({ lat, lon }))

      const map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
      const marker = new kakao.maps.Marker({
         position: map.getCenter(),
      })
      marker.setMap(map)
      kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
         latlng = mouseEvent.latLng
         marker.setPosition(latlng)
         const lat = latlng.getLat()
         const lon = latlng.getLng()
         dispatch(fetchLatlonWeather({ lat, lon }))
      })
   }, [])

   console.log(latlonWeather)
   return (
      <div>
         <div id="map" style={{ width: '600px', height: '450px', margin: '10px' }}></div>
         {latlonWeather && (
            <div style={{ margin: '10px' }}>
               <h3>지도를 클릭해보세요</h3>
               <p>
                  현재 위도는 {latlonWeather.coord.lat}, 경도는 {latlonWeather.coord.lon}입니다.
               </p>
               <p>
                  {latlonWeather.name},<img src={'https://openweathermap.org/img/wn/' + latlonWeather.weather[0].icon + '.png'} alt="icon" style={{ marginBottom: '-15px' }} />
                  {latlonWeather.weather[0].description},&nbsp;{latlonWeather.main.temp}℃
               </p>
            </div>
         )}
      </div>
   )
}

export default KaKaoMap
