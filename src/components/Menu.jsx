import './css/Menu.css'
import React, { useState, useEffect } from 'react'
import { NavLink, useMatch } from 'react-router-dom'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExploreIcon from '@mui/icons-material/Explore'
import MapIcon from '@mui/icons-material/Map'
import SearchIcon from '@mui/icons-material/Search'
function Menu() {
   const [open, setOpen] = useState(false)

   // 지역별 날씨 페이지일시 메뉴오픈
   const match = useMatch('/detail/:city')
   useEffect(() => {
      if (match) setOpen(true)
   }, [])

   const handleClick = () => {
      setOpen(!open)
   }

   return (
      <header>
         <nav>
            <List
               subheader={
                  <ListSubheader sx={{ backgroundColor: '#f5f6fa' }}>
                     <img src="/images/logo.png"></img>
                  </ListSubheader>
               }
            >
               <NavLink to="/">
                  <ListItemButton>
                     <ListItemIcon>
                        <MapIcon />
                     </ListItemIcon>
                     <ListItemText primary="전국날씨" />
                  </ListItemButton>
               </NavLink>

               <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                     <ExploreIcon />
                  </ListItemIcon>
                  <ListItemText primary="지역별날씨" />
                  {open ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <NavLink to="/detail/Seoul">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="서울" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Incheon">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="인천" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Daejeon">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="대전" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Chuncheon">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="춘천" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Daegu">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="대구" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Busan">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="부산" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Gwangju">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="광주" />
                        </ListItemButton>
                     </List>
                  </NavLink>
                  <NavLink to="/detail/Jeju">
                     <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                           <ListItemIcon>
                              <ArrowForwardIcon />
                           </ListItemIcon>
                           <ListItemText primary="제주" />
                        </ListItemButton>
                     </List>
                  </NavLink>
               </Collapse>

               <NavLink to="/kakaoSearch">
                  <ListItemButton>
                     <ListItemIcon>
                        <SearchIcon />
                     </ListItemIcon>
                     <ListItemText primary="지도검색" />
                  </ListItemButton>
               </NavLink>
            </List>
         </nav>
      </header>
   )
}

export default Menu
