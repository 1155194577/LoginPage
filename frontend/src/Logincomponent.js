import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Logincomponent() {
    const [Username,SetUsername] = useState([{}])
    const [Userpassword,SetUserpassword] = useState([{}])
    useEffect(
        ()=>{console.log(Username,Userpassword)} ,
        [Username,Userpassword]
    )
  return (
    <div>
    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event)=>{SetUsername(event.target.value)}}/>
    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>{SetUserpassword(event.target.value)}}/>
    <Button variant="contained">Login</Button>
    </div>
  )
}

export default Logincomponent
