import React, { useState } from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'

const queryClient = new QueryClient()  //
export const Context = React.createContext();
function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(false) 
  return (
    <Context.Provider value={[IsLoggedin,SetIsLoggedin]}>
    <QueryClientProvider client={queryClient}>   
     { IsLoggedin ?  <div>Logged in!</div> : <Logincomponent/>}
    </QueryClientProvider>
    </Context.Provider>
  )
}

export default App
