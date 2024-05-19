import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Context} from "./App"
import Datafetching from './datafetching';

const CheckCorrectness = (username,pw) => {
    console.log("Now check correctness");
}

function Logincomponent() {
    const [IsLoggedin,SetIsLoggedin] = useContext(Context)
    const [Username,SetUsername] = useState([{}])
    const [Userpassword,SetUserpassword] = useState([{}])
    const [Database,Setdatabase] = useState([])

    useEffect(
        ()=>{console.log(Username,Userpassword)} ,
        [Username,Userpassword]
    )

  return (
    <div>
    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event)=>{SetUsername(event.target.value)}}/>
    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>{SetUserpassword(event.target.value)}}/>
    <Button variant="contained" onClick={()=>{CheckCorrectness("test","test")}}>Login</Button>
    <Datafetching/>
    </div>
  )
}

export default Logincomponent


//pass down the state isLoggedin in App.js to child component ,default as false
//pass down the states Username and Userpassword as well
// if the username and password matches those in databases 
// change the isLoggedin to Тrue 