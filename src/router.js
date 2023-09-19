import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Watch from "./pages/Watch";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
