import React from 'react'
import Datafetching from './datafetching'
import { QueryClient,QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()  //

function App() {
  return (
    <QueryClientProvider client={queryClient}>   
    <Datafetching/>
    </QueryClientProvider>
  )
}

export default App
