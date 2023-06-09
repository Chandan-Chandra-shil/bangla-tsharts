import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import About from './components/About/About';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import Contact from './components/Contact/Contact';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
       loader:()=> fetch('tsharts.json')
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/review',
        element: <ReviewOrder></ReviewOrder>,
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);