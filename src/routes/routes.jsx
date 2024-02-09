import { createBrowserRouter } from "react-router-dom";
import Error from "../layout/Error";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import About from "../pages/About";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";

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
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/users/:id",
        element: <UserDetails/>,
        loader:({params})=>fetch(`https://dummyjson.com/users/${params.id}`)
      },
    ],
  },
]);

export default router;
