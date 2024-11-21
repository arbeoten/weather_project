import { Wrap } from '../styles/StyledComponents'
import { Link } from 'react-router-dom'
import { NotFoundDiv } from '../styles/StyledComponents'
import Menu from '../components/Menu'
import '../styles/common.css'

function NotFound() {
   return (
      <Wrap>
         <Menu></Menu>
         <NotFoundDiv>
            <div>
               <h1>잘못된 접근입니다</h1>
               <br></br>
               <Link to="/">
                  <p>홈으로</p>
               </Link>
            </div>
         </NotFoundDiv>
      </Wrap>
   )
}

export default NotFound
