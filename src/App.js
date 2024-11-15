import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import KakaoSearch from './pages/KakaoSearch'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/detail/:city" element={<Details />}></Route>
         <Route path="/kakaoSearch" element={<KakaoSearch />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
