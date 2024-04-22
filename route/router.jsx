import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Home/Home";
import Root from "../src/Root/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
]);
