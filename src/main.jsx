// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/browse.jsx'
import Sell from './pages/sell.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/login.jsx'
import ShowCategory from './pages/showCategory.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import BikeForm from './pages/BikeForm.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router=createBrowserRouter([
  {
    path:'/',    //indicates that App.jsx is the main layout of our application
    element:<App/>,   //wrapper for all child routes
    children:[
      {path:'/',element:<Home/>},
      {path:'/browse',element:<Browse/>},
      {path:'/sell',element:<Sell/>},
      {path:'/about',element:<About/>},
      {path:'/contact',element:<Contact/>},
      {path:'/signup',element:<Signup/>},
      {path:'/login',element:<Login/>},
      {path:'/showCategory',element:<ShowCategory/>},
      {path:'/policy',element:<PrivacyPolicy/>},
      {path:'/bikeForm',element:<BikeForm/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
)
