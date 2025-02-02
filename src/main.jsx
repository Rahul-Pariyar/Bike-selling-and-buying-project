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
      {path:'/showCategory',element:<ShowCategory/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import ErrorPage from "./pages/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // This is usually the layout or main component
//     errorElement: <ErrorPage />, // Handles 404 and other errors
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
