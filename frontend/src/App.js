import React, { useState } from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'
import Navbar from './Navbar';
import Database from './database';
import DataFormatting from './database';
const queryClient = new QueryClient()  //
export const Context = React.createContext();
function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(false) 
  const [IsCheckingDataBase,SetIsCheckingDataBase] = useState(false)
  return (
    <Context.Provider value={[IsLoggedin,SetIsLoggedin,IsCheckingDataBase,SetIsCheckingDataBase]}>
    <QueryClientProvider client={queryClient}>   
    <Navbar/>
     { IsLoggedin ?  <div>Logged in!</div> :  IsCheckingDataBase ?<DataFormatting/>:<Logincomponent/> }
    </QueryClientProvider>
    </Context.Provider>
  )
}

export default App
