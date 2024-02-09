import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Error from "../layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
]);

export default router;
