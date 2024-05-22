import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Home/Home";
import Root from "../src/Root/Root";
import AddComplain from "../src/AddComplain/AddComplain";

import MyComplain from "../src/MyComplain/MyComplain";
import Register from "../src/Register/Register";
import Login from "../src/Login/Login";
import Profile from "../src/Profile/Profile";
import Dashboard from "../src/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addComplain",
          element:<AddComplain></AddComplain>,
        },
        {
          path: "/myComplain",
          element:<MyComplain></MyComplain>,
         
        },
        {
          path: "/register",
          element:<Register></Register>,

        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/profile",
          element:<Profile></Profile>
        },
        

      ],
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:
      [

      ]
    }
]);
