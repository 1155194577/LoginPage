import React, { useState } from 'react'
import Datafetching from './datafetching'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'

const queryClient = new QueryClient()  //
export const Context = React.createContext();
function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(true) 
  return (
    <Context.Provider value={[IsLoggedin,SetIsLoggedin]}>
    <QueryClientProvider client={queryClient}>   
     { IsLoggedin ?  <Logincomponent/> : <div>Logged in!</div>}
    </QueryClientProvider>
    </Context.Provider>
  )
}

export default App
