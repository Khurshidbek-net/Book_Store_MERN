import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h2>Home</h2>,
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