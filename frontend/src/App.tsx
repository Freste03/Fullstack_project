import './App.css'



import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import HomeView from './views/HomeView'
import ResultsView from './views/ResultsView'
import ProductPageView from './views/ProductPageView'
import CartView from './views/CartView'
import BrandProductsView from './views/BrandProductsView'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { element: <HomeView />, path: "/" },
        { element: <ResultsView />, path: "/results" },
        { element: <ProductPageView />, path: "/product/:id/:name" },
        { element: <CartView />, path: "/cart" },
        { element: <BrandProductsView />, path: "/brand/:brand" }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
