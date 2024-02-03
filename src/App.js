import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes';
import { QueryClient, QueryClientProvider, } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl mx-auto bg-white'>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </QueryClientProvider>

  );
}

export default App;
