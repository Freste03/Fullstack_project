import './App.css'



import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomeView from './views/HomeView'



function App() {

  const router = createBrowserRouter([
    {
      children: [
        { element: <HomeView />, path: "/" }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
