import { Wrap } from '../styles/StyledComponents'
import Menu from '../components/Menu'
import '../styles/common.css'
import DetailWeather from '../components/DetailWeather'

function Details() {
   return (
      <Wrap>
         <Menu></Menu>
         <DetailWeather></DetailWeather>
      </Wrap>
   )
}

export default Details
