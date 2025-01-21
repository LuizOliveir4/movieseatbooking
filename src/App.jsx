import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Hero from './components/hero/Hero'
import Admin from './components/admin/Admin'

function Layout(){
  return(
    // exception: only Booking shows Header and Footer in this exercise
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>FEL</div>,
    children:[
      {
        path:"/movieseatbooking/", element: <Hero />,
      },
      {
        path:"/movieseatbooking/admin", element: <Admin />,
      }
    ]
  }
])

function App() {

  return (
    <>

      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App
