import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/home/Header/HeaderHome'
import {Grid} from "@mui/material"
const Layout = () => {
  return (
   <Grid>
     <HeaderHome/>
    <Outlet />
   </Grid>
  )
}

export default Layout