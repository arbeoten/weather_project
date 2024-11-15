import { Wrap } from '../styles/StyledComponents'
import Menu from '../components/Menu'
import MainMap from '../components/MainMap'
import '../styles/common.css'

function Home() {
   return (
      <Wrap>
         <Menu></Menu>
         <MainMap></MainMap>
      </Wrap>
   )
}

export default Home
