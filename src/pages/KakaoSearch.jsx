import { Wrap } from '../styles/StyledComponents'
import Menu from '../components/Menu'
import '../styles/common.css'
import KaKaoMap from '../components/KaKaoMap'

function KakaoSearch() {
   return (
      <Wrap>
         <Menu></Menu>
         <KaKaoMap></KaKaoMap>
      </Wrap>
   )
}

export default KakaoSearch
