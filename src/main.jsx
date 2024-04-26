import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from '../route/router';

//https://i.ibb.co/bQzpjz9/images.jpg
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className="bg-[url('https://i.ibb.co/Rj1M1j1/bg.png')] 
   opacity-90
   lg:max-w-[1960px]
   ">
   <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-lg'>
   <RouterProvider router={router} />
   </div>
   </div>
  </React.StrictMode>,
)
