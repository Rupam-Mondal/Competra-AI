import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'
import Routing from './Routes/Routing';

function App() {

  const queryClient = new QueryClient();
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routing/>
      </QueryClientProvider>
    </>
  )
}

export default App
