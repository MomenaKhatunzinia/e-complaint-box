import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Home/Home";
import Root from "../src/Root/Root";
import AddComplain from "../src/AddComplain/AddComplain";

import MyComplain from "../src/MyComplain/MyComplain";

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
          loader:()=>fetch('http://localhost:5000/Complains')
        },
      ],
    },
]);
