import axios from 'axios'

const key = 'AIzaSyAGvCtn709KfWprpZJVjNVo2jv1NGW_IVI'
const ch_id = 'UCI110BywhJpYRC1XY_rSMiQ'
const playlist_id = 'PLOb64j4Ajfty9Yvv6i3kl8YVDpxLIPUsU'
const base_url = 'https://www.googleapis.com/youtube/v3/'

const fetchFromApi = async (url, params = {}) => {
   try {
      const result = await axios.get(url, { params })
      return result
   } catch (error) {}
}

export const getYoutube = () => {
   const params = {
      key,
      maxResults: 1,
      part: 'snippet',
      playlistId: playlist_id,
   }

   return fetchFromApi(base_url + 'playlistItems', params)
}
