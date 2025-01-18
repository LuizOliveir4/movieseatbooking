import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Booking from './components/Booking'
import Admin from './components/Admin'
import CreateGuest from './components/CreateGuest'


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
        path:"/movieseatbook/", element: <Booking />,
      },
      {
        path:"/movieseatbook/admin", element: <Admin />,
      },
      {
        path:"/movieseatbook/createguest", element: <CreateGuest />,
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
