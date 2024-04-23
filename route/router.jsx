import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Home/Home";
import Root from "../src/Root/Root";
import AddComplain from "../src/AddComplain/AddComplain";

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
      ],
    },
]);
