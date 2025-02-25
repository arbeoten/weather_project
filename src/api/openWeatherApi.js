import axios from 'axios'

const base_url = 'https://api.openweathermap.org/data/2.5/'
const key = '85265a64ee6d6491e73e0825f493a172'

const fetchFromApi = async (url, params = {}) => {
   try {
      const result = await axios.get(url, { params })
      return result
   } catch (error) {}
}

// 8개도시 현재날씨
export const getAllCityWeather = () => {
   const params = {
      appid: key,
      lang: 'kr',
      units: 'metric',
      id: '1835847,1843564,1835235,1845136,1835329,1838519,1841808,1846266',
      /*
      1835847 서울
      1843564 인천
      1835235 대전
      1845136 춘천
      1835329 대구
      1838519 부산
      1841808 광주
      1846266 제주
      */
   }

   return fetchFromApi(base_url + 'group', params)
}

// 5일치 예보
export const getDetailCityWeather = (city) => {
   const params = {
      appid: key,
      lang: 'kr',
      units: 'metric',
      q: city,
   }

   return fetchFromApi(base_url + 'forecast', params)
}

// 대기 오염도
export const getAirPollution = (lat, lon) => {
   const params = {
      lat,
      lon,
      appid: key,
   }
   return fetchFromApi(base_url + 'air_pollution/forecast', params)
}

// 단일도시 날씨

export const getWeather = (city) => {
   const params = {
      appid: key,
      lang: 'kr',
      units: 'metric',
      q: city,
   }

   return fetchFromApi(base_url + 'weather', params)
}

// 위도, 경도 날씨

export const getLatlonWeather = (lat, lon) => {
   const params = {
      appid: key,
      lang: 'kr',
      units: 'metric',
      lat,
      lon,
   }

   return fetchFromApi(base_url + 'weather', params)
}
