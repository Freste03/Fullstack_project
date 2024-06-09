import './App.css'



import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import HomeView from './views/HomeView'
import ResultsView from './views/ResultsView'
import ProductPageView from './views/ProductPageView'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { element: <HomeView />, path: "/" },
        { element: <ResultsView />, path: "/results" },
        { element: <ProductPageView />, path: "/product/:id/:name" },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
