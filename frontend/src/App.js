import React, { useState } from 'react'
import Datafetching from './datafetching'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'
import Navbar from './Navbar'

const queryClient = new QueryClient()  //
export const Context = React.createContext();
function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(false) 
  return (
    <Context.Provider value={[IsLoggedin,SetIsLoggedin]}>
    <QueryClientProvider client={queryClient}>   
      <Navbar/>
     { IsLoggedin ?  <div>Logged in!</div> : <Logincomponent/>}
    </QueryClientProvider>
    </Context.Provider>
  )
}

export default App
