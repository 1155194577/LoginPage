import React, { useState } from 'react'
import Datafetching from './datafetching'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'

const queryClient = new QueryClient()  //

function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(true) 
  return (
    <QueryClientProvider client={queryClient}>   
     { IsLoggedin ?  <Logincomponent/> : <div>test</div>}
    </QueryClientProvider>
  )
}

export default App
