import React from 'react'
import Datafetching from './datafetching'
import { QueryClient,QueryClientProvider } from 'react-query'
import Logincomponent from './Logincomponent'

const queryClient = new QueryClient()  //

function App() {
  return (
    <QueryClientProvider client={queryClient}>   
      <Logincomponent/>
    </QueryClientProvider>
  )
}

export default App
