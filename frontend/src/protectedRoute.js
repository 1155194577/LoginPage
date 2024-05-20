import React from 'react'
import {Context} from "./App"
import { useContext } from 'react'
import Typography from '@mui/material/Typography'
function ProtectedRoute() {
    const [IsLoggedin,SetIsLoggedin,IsCheckingDataBase,SetIsCheckingDataBase] = useContext(Context)
    if (!IsLoggedin) {
        return (<div>No Permission!</div>)
    }
  return (
    <Typography variant="h10" color="initial">Logged in! welcome </Typography>
    
  )
}

export default ProtectedRoute
