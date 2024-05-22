import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from '../route/router';
import AuthProvider from './AuthProvider/AuthProvider';

//https://i.ibb.co/bQzpjz9/images.jpg
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-lg'>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  
   </div>
  </React.StrictMode>,
)
