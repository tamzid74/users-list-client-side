import { createBrowserRouter } from "react-router-dom";
import Error from "../layout/Error";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
