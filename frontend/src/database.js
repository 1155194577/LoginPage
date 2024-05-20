import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
function DataFormatting(arr){
    const kvpair = arr.reduce(
      (obj,item) =>  {
        obj[item.user_name]=item.user_password;
        return obj; 
      },[]
    );
      return kvpair; 
  }
  
function Database() {
    const {isLoading,error,data} = useQuery('datakey',()=>{
        return axios.get("http://localhost:5001/api")
      });
      console.log(isLoading)
      if(isLoading){
        return <div>loading</div>
      }
      if (error){
        return <div>error!!</div>
      }

      console.log(data);
      const arr = data["data"];
      const kvpair = DataFormatting(arr);
      console.log(kvpair);
  return (
    <div>
       { arr.map( 
            (item) => (<div>{item.user_id},{item.user_name},{item.user_password}</div>)
        )}
    </div>
  )
}

export default Database



