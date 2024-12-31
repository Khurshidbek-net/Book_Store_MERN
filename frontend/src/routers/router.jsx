import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/orders",
        element: <h2>Orders</h2>,
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
    ],
  },
]);

export default router;