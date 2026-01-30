
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/Home/Home'



const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children:[
      {index:true, Component:Home}
    ]
    
    
  }
])
createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>

)
