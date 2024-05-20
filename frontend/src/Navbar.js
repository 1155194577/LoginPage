import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { sizing } from '@mui/system';
import "./Navbar.css"
function Navbar() {
  return (
    <Box>
    <AppBar  position="static" color="primary">
      <Toolbar className='navbar'>
        <Typography variant="h7">
          Database
        </Typography>


        <Typography variant="h7">
          Login
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar