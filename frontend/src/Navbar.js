import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { sizing } from '@mui/system';
import "./Navbar.css"
import { Context } from './App'
function Navbar() {
  const [IsLoggedin,SetIsLoggedin,IsCheckingDataBase,SetIsCheckingDataBase] = useContext(Context)
  return (
    <Box>
    <AppBar  position="static" color="primary">
      <Toolbar className='navbar'>
        <Typography variant="h7" onClick={()=>{SetIsCheckingDataBase(true)}}>
        Database
        </Typography>


        <Typography variant="h7" onClick={()=>{SetIsCheckingDataBase(false)}}>
          Login
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar

