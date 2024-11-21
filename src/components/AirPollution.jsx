function AirPollution({ so2, no2, pm10, pm25, o3, co, aqi }) {
   let aqi_res = ''
   switch (aqi) {
      case 1:
         aqi_res = '좋음'
         break
      case 2:
         aqi_res = '괜찮음'
         break
      case 3:
         aqi_res = '보통'
         break
      case 4:
         aqi_res = '나쁨'
         break
      case 5:
         aqi_res = '매우나쁨'
         break
   }

   let so2_res = ''
   if (so2 < 20) so2_res = '좋음'
   else if (so2 < 80) so2_res = '괜찮음'
   else if (so2 < 250) so2_res = '보통'
   else if (so2 < 350) so2_res = '나쁨'
   else so2_res = '매우나쁨'

   let no2_res = ''
   if (no2 < 40) no2_res = '좋음'
   else if (no2 < 70) no2_res = '괜찮음'
   else if (no2 < 150) no2_res = '보통'
   else if (no2 < 200) no2_res = '나쁨'
   else no2_res = '매우나쁨'

   let pm10_res = ''
   if (pm10 < 20) pm10_res = '좋음'
   else if (pm10 < 50) pm10_res = '괜찮음'
   else if (pm10 < 100) pm10_res += '보통'
   else if (pm10 < 200) pm10_res += '나쁨'
   else pm10_res = '매우나쁨'

   let pm25_res = ''
   if (pm25 < 10) pm25_res = '좋음'
   else if (pm25 < 25) pm25_res = '괜찮음'
   else if (pm25 < 50) pm25_res = '보통'
   else if (pm25 < 75) pm25_res = '나쁨'
   else pm25_res = '매우나쁨'

   let o3_res = ''
   if (o3 < 60) o3_res = '좋음'
   else if (o3 < 100) o3_res = '괜찮음'
   else if (o3 < 140) o3_res = '보통'
   else if (o3 < 180) o3_res += '나쁨'
   else o3_res += '매우나쁨'

   let co_res = ''
   if (co < 4400) co_res = '좋음'
   else if (co < 9400) co_res = '괜찮음'
   else if (co < 12400) co_res = '보통'
   else if (co < 15400) co_res = '나쁨'
   else co_res = '매우나쁨'

   function colorCheck(res) {
      switch (res) {
         case '좋음':
            return '#304ffe'
         case '괜찮음':
            return '#536dfe'
         case '보통':
            return '#ff9e80'
         case '나쁨':
            return '#fafafa'
         case '매우나쁨':
            return '#ff3d00'
      }
   }

   return (
      <div>
         <p className="aqi" style={{ color: colorCheck(aqi_res) }}>
            현재 대기 오염지수 :{aqi}단계, {aqi_res}
         </p>
         <p className="so2" style={{ color: colorCheck(so2_res) }}>
            SO<sub>2</sub>(아황산가스) : {so2}, {so2_res}
         </p>
         <p className="no2" style={{ color: colorCheck(no2_res) }}>
            NO<sub>2</sub>(이산화질소) : {no2}, {no2_res}
         </p>
         <p className="pm10" style={{ color: colorCheck(pm10_res) }}>
            PM<sub>10</sub>(미세먼지) : {pm10}, {pm10_res}
         </p>
         <p className="pm25" style={{ color: colorCheck(pm25_res) }}>
            PM<sub>2.5</sub>(초미세먼지) : {pm25}, {pm25_res}
         </p>
         <p className="o3" style={{ color: colorCheck(o3_res) }}>
            O<sub>3</sub>(오존) : {o3}, {o3_res}
         </p>
         <p className="co" style={{ color: colorCheck(co_res) }}>
            CO(일산화탄소) : {co}, {co_res}
         </p>
      </div>
   )
}
export default AirPollution
