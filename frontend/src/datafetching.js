import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

function Datafetching() {

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
            (item) => (<div>{item.key},{item.name},{item.age}</div>)
        )}
    </div>
  )
}


export default Datafetching