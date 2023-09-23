import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Mini from "./components/Mini";
import Mini_origin from "./components/Mini_origin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
  {
    path: "/mini",
    element: <Mini />,
  },
]);

export default router;
