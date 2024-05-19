import React,{useContext} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import {Context} from "./App"
function Datafetching() {

    const [IsLoggedin,SetIsLoggedin] = useContext(Context)
    console.log("ter",IsLoggedin)
    const {isLoading,data} = useQuery('datakey',()=>{
        return axios.get("http://localhost:5001/api")
      })
      console.log(isLoading)
      if(isLoading){
        return <div>loading</div>
      }
      console.log(data);
      const arr = data["data"];
  return (
    <div>
       { arr.map( 
            (item) => (<div>{item.user_id},{item.user_name},{item.user_password}</div>)
        )}
    </div>
  )
}


export default Datafetching
