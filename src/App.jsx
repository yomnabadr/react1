import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Portfolio from './component/Portfoilo/portfoilo'
import Contact from './component/Contact/Contact'
import NotFound from './component/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


let routers = createBrowserRouter([
  {path: '' , element: <Layout/> , children: [
    {index : true , element: <Home/>},
    {path: 'about' , element: <About/>},
    {path: 'portfolio' , element: <Portfolio/>},
    {path: 'contact' , element: <Contact/>},
    {path: '*' , element: <NotFound/>},
  ]},

])


function App() {
 

  return <RouterProvider router={routers}></RouterProvider>
  
}

export default App
