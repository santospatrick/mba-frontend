import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/react-query'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
