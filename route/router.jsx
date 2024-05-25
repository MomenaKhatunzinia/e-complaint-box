import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Home/Home";
import Root from "../src/Root/Root";
import AddComplain from "../src/AddComplain/AddComplain";

import MyComplain from "../src/MyComplain/MyComplain";
import Register from "../src/Register/Register";
import Login from "../src/Login/Login";
import Profile from "../src/Profile/Profile";
import Dashboard from "../src/Dashboard/Dashboard";
import Update from "../src/Update/Update";
import ComplainLoad from "../src/Dashboard/ComplainShow/ComplainLoad";
import ComplainDetails from "../src/Dashboard/ComplainDetails/ComplainDetails";
import AdminPanel from "../src/Dashboard/AdminPanel/AdminPanel";
import AddAdmin from "../src/Dashboard/AddAdmin/AddAdmin";

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
        {
          path: "/update/:_id",
          element:<Update></Update>,
          loader:({params}) =>fetch(`http://localhost:5000/Updatecomplains/${params._id}`)

        },

      ],
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:
      [
        {
          path: "/dashboard/complain",
          element:<ComplainLoad></ComplainLoad>,
          loader:() =>fetch(`http://localhost:5000/complains`)

        },
        {
          path: "/dashboard/complainDetails/:_id",
          element:<ComplainDetails>
          </ComplainDetails>,
          loader:({params}) =>fetch(`http://localhost:5000/Updatecomplains/${params._id}`)

        },
        {
          path: "/dashboard/admin",
          element:<AdminPanel></AdminPanel>,
          loader:() =>fetch(`http://localhost:5000/admins`)
         

        },
        {
          path: "/dashboard/addAdmin",
          element:<AddAdmin></AddAdmin>,
         

        },

      ]
    }
]);
