import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Context} from "./App"
import axios from 'axios';
import './Logincomponent.css'
import { useMutation } from 'react-query';
import Database from './database';
const CheckCorrectness = (username,pw) => {
    console.log("Now check correctness");
}


function Logincomponent() {
    const api = "http://localhost:5001/postdata"; 
    const [IsLoggedin,SetIsLoggedin,IsCheckingDataBase,SetIsCheckingDataBase] = useContext(Context)
    const [Username,SetUsername] = useState([{}])
    const [Userpassword,SetUserpassword] = useState([{}])

    const handlesumbit = () => {
        console.log("test")
        axios.post(api, {
            "Username" : Username,
            "Userpassword" : Userpassword
          })
          .then(function (response) {
            const IsCorrectUserNameAndPassword = response["data"]["Correct"]; 
            if (IsCorrectUserNameAndPassword) {
              console.log("correct!")
              SetIsLoggedin(true)
            }
            else {
              alert("Incorrect!")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div className='LoginBox'>
    <TextField className='boxes' id="username" label="Username" variant="outlined" onChange={(event)=>{SetUsername(event.target.value)}}/>
    <TextField className='boxes' id="password" label="Password" variant="outlined" onChange={(event)=>{SetUserpassword(event.target.value)}}/>
    <Button className='boxes' variant="contained" onClick={handlesumbit}>Login</Button>
    </div>
  )
}

export default Logincomponent


//pass down the state isLoggedin in App.js to child component ,default as false
//pass down the states Username and Userpassword as well
// if the username and password matches those in databases 
// change the isLoggedin to Тrue 